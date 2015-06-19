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
  
  describe "POST 'create'" do
    describe "failure" do
      before(:each) do
        @attr = {:name=>"", :email=>"", :password=>"",:password_confirmation=>""}
      end
      it "should not create new user" do
        lambda do
          post :create, :user => @attr
        end.should_not change(User, :count)
      end
      it "should have the right title" do
	    post :create, :user => @attr
	    expect(response.body).to have_title("Sign up")
	  end
	  it "should render the 'new' page" do
    	post :create, :user => @attr
	    response.should render_template('new')
	  end
	end
	
	describe "success" do
	  before(:each) do
	    @attr = {:name=>"Mohan", :email=>"mohan@gmail.com", :password=>"foobar", :password_confirmation=>"foobar"}
	  end
	  it "should create new user" do
	    lambda do
          post :create, :user => @attr
        end.should change(User, :count).by(1)
	  end
	  it "should redirect to user profile" do
	    post :create, :user => @attr
	    response.should redirect_to(user_path(assigns(:user)))
	  end
	  it "should have welcome message" do
	    post :create, :user => @attr
	    flash[:success].should =~ /welcome to rails sample app/i
	  end
	  it "should sign in user" do
	    post :create, :user => @attr
	    controller.should be_signed_in
	  end
	end
    
  end

end 
