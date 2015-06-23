require 'spec_helper'

RSpec.describe Micropost, type: :model do
  before(:each) do
    @user = FactoryGirl.create(:user)
    @attr = {:content=>"foo bar"}
  end
  it "should create new instance" do
    @user.microposts.create!(@attr)
  end
  
  describe "User associations" do
    before(:each) do
      @micropost = @user.microposts.create(@attr)
    end
    it "should have an user attributre" do
      @micropost.should respond_to(:user)
    end
    it "should have right association" do
      @micropost.user_id.should == @user.id
      @micropost.user.should == @user 
    end
  end
  
  describe "validations" do
	it "should require a user id" do
      Micropost.new(@attr).should_not be_valid
	end
	it "should require nonblank content" do
	  @user.microposts.build(:content => " ").should_not be_valid
	end
	it "should reject long content" do
	  @user.microposts.build(:content => "a" * 141).should_not be_valid
	end
  end
end
