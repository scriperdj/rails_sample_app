require 'spec_helper'

RSpec.describe User, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  
  before(:each) do
    @attr = {:name=>"Example User", :email=>"user@example.com"}
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
  
end
