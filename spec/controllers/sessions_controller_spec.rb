require 'spec_helper'

RSpec.describe SessionsController, type: :controller do
  render_views

  describe "GET #new",type: :feature do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
    it "should have right title" do
       visit signin_path
       page.should have_title('Sign in')
    end
  end
  
  describe "POST 'create' " do
	  describe "invalid signin" do
		before(:each) do
		  @attr = {:email => "user@example.com", :password => "invalid"}
		end
		it "should rerender signin page" do
		  post :create, :session => @attr
		  response.should render_template('new')
		end
		it "should have right title" do
		   post :create, :session => @attr
		   expect(response.body).to have_title("Sign in")
		end
		it "should have a flash.now message" do
		  post :create, :session => @attr
		  flash.now[:error].should =~ /invalid/i
		end
	  end
	  
	  describe "valid signin" do
	    before(:each) do
	      @user = FactoryGirl.create(:user)
	      @attr = {:email=>@user.email, :password => @user.password}
	    end
	    it "should redirect to show page" do
	      post :create, :session => @attr
	      response.should redirect_to(user_path(@user))
	    end
	    it "should signin user" do
	      post :create, :session => @attr
	      #Test for signin user
	      controller.current_user.should == @user
	      controller.should be_signed_in
	    end
	  end
	  
	  describe "Delete 'destroy'" do
	    it "should sign out user" do
	      test_sign_in(FactoryGirl.create(:user))
	      delete :destroy
	      controller.should_not be_signed_in
	      controller.should redirect_to(root_path)
	    end
	  end
  end

end
