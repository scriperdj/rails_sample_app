require 'spec_helper'

RSpec.describe UsersController, type: :controller do
  
  render_views

  describe "GET #new", type: :feature do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
    
    it "should have right title" do
      visit signup_path
      page.should have_title("Sign up")
    end
    
  end
  
  describe "'GET' #show", type: :feature do
    before(:each) do
      @user = FactoryGirl.create(:user)
      get :show, :id => @user
    end
    
    it "should be successful" do
      
      response.should be_success
    end
    
    it "should have right user" do
      
      assigns(:user).should == @user 	
    end
    
    it "should have right title" do
      expect(response.body).to have_title(@user.name)
    end
    
    it "should include the user's name" do
	  expect(response.body).to have_selector('h1', text: @user.name)
	  #response.should have_selector('h1', :text => @user.name)
	end
	
	it "should have user avatar" do
	  expect(response.body).to have_selector("h1>img.gravatar")
	end
 
  end

end 
