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
      
    end
    
    it "should be successful" do
      get :show, :id => @user
      response.should be_success
    end
    
    it "should have right user" do
      get :show, :id => @user
      assigns(:user).should == @user 	
    end
    
    it "should have right title" do
      get :show, :id => @user
      expect(response.body).to have_title(@user.name)
    end
    
    it "should include the user's name" do
      get :show, :id => @user
	  expect(response.body).to have_selector('h1', text: @user.name)
	  #response.should have_selector('h1', :text => @user.name)
	end
	
	it "should have user avatar" do
	  get :show, :id => @user
	  expect(response.body).to have_selector("h1>img.gravatar")
	end
	
	it "should show the user's microposts" do
  	  mp1 = FactoryGirl.create(:micropost, :user => @user, :content => "Foo bar")
	  mp2 = FactoryGirl.create(:micropost, :user => @user, :content => "Baz quux")
	  get :show, :id => @user
	  expect(response.body).to have_selector("span.content", :text => mp1.content)
	  expect(response.body).to have_selector("span.content", :text => mp2.content)
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
  
  describe "GET 'edit'" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      test_sign_in(@user)
      get :edit, :id => @user 
    end
    it "should be succesful" do
      response.should be_success
    end
    it "should have right title" do
      expect(response.body).to have_title("Edit user")
    end
    it "should have correct image link" do
      expect(response.body).to have_link("change", href: "http://gravatar.com/emails")
    end
  end
  
  describe "POST 'update'" do
    before(:each) do
      @user = FactoryGirl.create(:user)
      test_sign_in(@user)
    end
    
    describe "failure" do
      before(:each) do
        @attr = {:email =>"", :name =>"", :password =>"", :password_confirmation =>""}
      end
      it "should render template edit" do
        put :update, :id => @user, :user => @attr
        response.should render_template('edit')
      end
      it "should render template edit" do
        put :update, :id => @user, :user => @attr
        expect(response.body).to have_title("Edit user")
      end
    end
    describe "success" do
      before(:each) do
        @attr = {:name=>"New name", :email => "user@example.com", :password=>"foobar", :password_confirmation =>"foobar"}
        post :update, :id => @user, :user => @attr
      end
      it "should save user attributes" do
        
        @user.reload
        @user.email.should == @attr[:email]
        @user.name.should == @attr[:name]
      end
      it "should redirect to show page" do
        response.should redirect_to(user_path(@user))      
      end
      it "should have success message" do
        flash[:success].should =~ /updated/
      end
    end
  end
  
  describe "It should authenticate for edit / update" do
    before(:each) do
      @user = FactoryGirl.create(:user) 
    end
    describe "For non signed in user"  do
      it "should deny access to edit" do
        get :edit, :id => @user
        response.should redirect_to(signin_path)
      end
      it "should deny access to update" do
        post :update, :id => @user, :user => {}
        response.should redirect_to(signin_path)
      end
    end
    describe "For signed in user" do
      before(:each) do
        wrong_user = FactoryGirl.create(:user, :email => "user@example.net")
        test_sign_in(wrong_user)
      end
      it "should redirect to root for wrong user edit" do
        get :edit, :id => @user 
        response.should redirect_to(root_path)
      end
      it "should redirect to root for wrong user update" do
        post :update, :id => @user, :user => {}
        response.should redirect_to(root_path)
      end
    end
  end
  
  describe "GET 'index'" do
    describe "For non-signedin users" do
      it "should redirect to signin page" do
        get :index
        response.should redirect_to(signin_path)
        flash[:notice].should =~ /signin/i
      end
    end
    describe "For signed in users" do
      before(:each) do
        @user = test_sign_in(FactoryGirl.create(:user))
        second_user = FactoryGirl.create(:user, :email=>"anotheruser@example.com")
        third_user = FactoryGirl.create(:user,:email=>"anotheruser@example.net")
        @users = [@user, second_user, third_user]
        40.times do
          @users << FactoryGirl.create(:user, :email => FactoryGirl.generate(:email))
        end
      end
      it "should have right title" do
        get :index
        expect(response.body).to have_title("All Users")
      end
      it "should have element for each user" do
        get :index
        @users.each do |user|
          expect(response.body).to have_selector('li',:text=> user.name)
        end
      end
      it "should paginate users" do
        get :index
        expect(response.body).to have_selector("div.pagination")
       # expect(response.body).to have_link("/users?page=2", :text=>"2")
      end
    end
  end
  
  describe "DELETE 'destroy'" do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end
    describe "For non signed in user" do
      it "should deny access" do
        delete :destroy, :id => @user 
        response.should redirect_to(signin_path)
      end
    end
    describe "For non admin users" do
      it "should protect page" do
        test_sign_in(@user)
        delete :destroy, :id => @user 
        response.should redirect_to(root_path)
      end
    end
    describe "For admin users" do
      before(:each) do
        admin = FactoryGirl.create(:user, :email=>"admin@example.com", :admin => true)
        test_sign_in(admin)
      end
      it "should destroy users" do
        lambda do 
          delete :destroy, :id => @user 
        end.should change(User, :count).by(-1)
      end
      it "should redirect to users page" do
        delete :destroy, :id => @user 
        response.should redirect_to(users_path)
      end
    end
  end

end 
