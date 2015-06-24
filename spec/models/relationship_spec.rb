require 'spec_helper'

RSpec.describe Relationship, type: :model do
  before(:each) do
    @follower = FactoryGirl.create(:user)
    @followed = FactoryGirl.create(:user, :email => FactoryGirl.generate(:email))
    @relationship = @follower.relationships.build(:followed_id => @followed.id)
  end
  
  it "should create a new instance" do
    @relationship.save!
  end
  
  describe "follow methods" do
    before(:each) do
      @relationship.save
    end
    it "should have a follower attribute" do
	  @relationship.should respond_to(:follower)
	end
	it "should have the right follower" do
	  @relationship.follower.should == @follower
	end
	it "should have a followed attribute" do
	  @relationship.should respond_to(:followed)
	end
	it "should have the right followed user" do
	  @relationship.followed.should == @followed
	end
  end
  describe "validations" do
    it "should require a follower_id" do
	  @relationship.follower_id = nil
	  @relationship.should_not be_valid
	end
	it "should require a followed_id" do
	  @relationship.followed_id = nil
	  @relationship.should_not be_valid
	end
  end
end
