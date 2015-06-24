require 'spec_helper'

RSpec.describe User, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  
  before(:each) do
    @attr = {:name=>"Example User", :email=>"user@example.com", :password=>"foobar", :password_confirmation=>"foobar"}
  end
  
  describe "relationship" do
    before(:each) do
      @user = User.create(@attr)
      @followed = FactoryGirl.create(:user)
    end
    it "should have relationship method" do
      @user.should respond_to(:relationships)
    end
    it "should have a following method" do
	  @user.should respond_to(:following)
	end
	it "should have a following? method" do
	  @user.should respond_to(:following?)
	end
	it "should have a follow! method" do
	  @user.should respond_to(:follow!)
	end
	it "should follow another user" do
	  @user.follow!(@followed)
	  @user.should be_following(@followed)
	end
	it "should include the followed user in the following array" do
      @user.follow!(@followed)
      @user.following.should include(@followed)
    end
    it "should have an unfollow! method" do
	  @followed.should respond_to(:unfollow!)
	end
	it "should unfollow a user" do
	  @user.follow!(@followed)
	  @user.unfollow!(@followed)
	  @user.should_not be_following(@followed)
	end
	it "should have a reverse_relationships method" do
	  @user.should respond_to(:reverse_relationships)
	end
	it "should have a followers method" do
	  @user.should respond_to(:followers)
	end
	it "should include the follower in the followers array" do
	  @user.follow!(@followed)
	  @followed.followers.should include(@user)
	end
  end
  
  describe "microposts associations" do 
    before(:each) do
      @user = User.create(@attr)
      @mp1 = FactoryGirl.create(:micropost, :user => @user, :created_at=> 1.day.ago)
      @mp2 = FactoryGirl.create(:micropost, :user => @user, :created_at => 1.hour.ago)
    end 
    
    describe "status feed" do
      it "should have feed" do
        @user.should respond_to(:feed)
      end
      it "should include user microposts" do
        @user.feed.include?(@mp1).should be true
        @user.feed.include?(@mp2).should be true
      end
      it "should not include others posts" do
        mp3 = FactoryGirl.create(:micropost, :user => FactoryGirl.create(:user, :email=> FactoryGirl.generate(:email)))
        @user.feed.include?(mp3).should be false
      end
      it "should include the microposts of followed users" do
	    followed = FactoryGirl.create(:user, :email => FactoryGirl.generate(:email))
		mp3 = FactoryGirl.create(:micropost, :user => followed)
		@user.follow!(followed)
		@user.feed.should include(mp3)
	  end
    end	
    it "should have micropost attribute" do
      @user.should respond_to(:microposts)
    end
    it "should have right order of posts" do
      @user.microposts.should == [@mp2, @mp1]
    end
    it "should destroy associated microposts" do
      @user.destroy
      [@mp1, @mp2].each do |mp|
        Micropost.find_by_id(mp.id).should be_nil
      end
    end
  end
  
  it "should create new user with vaild attributes" do
    User.create!(@attr)
  end
  
  it "should require a name" do
    no_name_user = User.new(@attr.merge(:name=>""))
    no_name_user.should_not be_valid
  end
  
  it "should require a email" do
    no_email_user = User.new(@attr.merge(:email=>""))
    no_email_user.should_not be_valid
  end
  
  it "should reject long names" do
    long_name = "a" * 51
    long_name_user = User.new(@attr.merge(:name => long_name))
    long_name_user.should_not be_valid
  end
  
  it "should have valid email" do
    addresses = %w[user@foo.com JJ_OO@kb.org Oip@ppp.in]
    addresses.each do |address|
      valid_email_user = User.new(@attr.merge(:email=>address))
      valid_email_user.should be_valid
    end
  end
  
  it "should reject invalid email" do
    addresses = %w[user.com FOO.bar.com jj@bar.]
    addresses.each do |address|
      invalid_email_user = User.new(@attr.merge(:email=>address))
      invalid_email_user.should_not be_valid
    end
  end
  
  it "should reject duplicate email" do
    User.create!(@attr)
    duplicate_email_user = User.new(@attr)
    duplicate_email_user.should_not be_valid
  end
  
  it "should reject identical email" do
    identical_email = "USER@eXampLe.cOM"
    User.create!(@attr)
    identical_email_user = User.new(@attr.merge(:email=>identical_email))
    identical_email_user.should_not be_valid
  end
  
  it "should require a password" do
    User.new(@attr.merge(:password=>"",:password_confirmation=>"")).should_not be_valid
  end
  
  it "should have matching password confirmaion" do
    User.new(@attr.merge(:password_confirmation=>"invalid")).should_not be_valid
  end
  
  it "should reject short password" do
    short_pass = "a" * 5
    User.new(@attr.merge(:password=>short_pass,:password_confirmation=>short_pass)).should_not be_valid
  end
  
  it "should reject long password" do
    long = "a" * 41
    User.new(@attr.merge(:password=>long,:password_confirmation=>long)).should_not be_valid    
  end
  
  describe "password encryption" do
    before(:each) do
      @user = User.create!(@attr)
    end
    
    it "should have admin attribute" do
      @user.should respond_to(:admin)
    end
    
    it "should be convertable to admin" do
      @user.toggle!(:admin)
      @user.should be_admin
    end
    
    it "should not be admin by default" do
      @user.should_not be_admin
    end
    
    it "should have encrypted password" do
      @user.should respond_to(:encrypted_password)
    end
    
    it "should not be blank" do
      @user.encrypted_password.should_not be_blank
    end
    
    describe "password match" do
      it "should be true if the passwords match" do
		@user.has_password?(@attr[:password]).should be true
	  end
      it "should be false if password doesnt match" do
        @user.has_password?("invalid").should be false
      end
    end
    
    describe "authentication method" do
      it "should return nill if password wrong" do
        wrong_password_user = User.authenticate(@attr[:email], "worngpass") 
        wrong_password_user.should be_nil
      end
      
      it "should return nill if user not exist" do
        invalid_user = User.authenticate("foo@bar.com", @attr[:password])
      end
      
      it "should return object if user with password exist" do
        valid_user = User.authenticate(@attr[:email],@attr[:password])
        valid_user == @user
      end
    end
  end
    
end
