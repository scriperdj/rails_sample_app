class UsersController < ApplicationController
  before_filter :authenticate, :except => [:show, :new, :create]
  before_filter :correct_user, :only => [:edit, :update]
  before_filter :admin_user, :only => [:destroy]
  
  def destroy
    User.find(params[:id]).delete
    flash[:success] = "User deleted."
    redirect_to users_path
  end
  
  def following
	@title = "Following"
	@user = User.find(params[:id])
	@users = @user.following.paginate(:page => params[:page])
	render 'show_follow'
  end
  
  def followers
	@title = "Followers"
	@user = User.find(params[:id])
	@users = @user.followers.paginate(:page => params[:page])
	render 'show_follow'
  end
  
  def index
    @title = "All Users"
    @users = User.paginate(:page => params[:page])
  end
  
  def new
    @user = User.new
    @title = "Sign up"
  end
  
  def show
    @user = User.find(params[:id])
    @microposts = @user.microposts.paginate(:page => params[:page])
    @title = @user.name
  end
  
  def create
    @user = User.new(params[:user].permit(:name, :email, :password, :password_confirmation))
    if @user.save
      #save user info
      sign_in @user
      flash[:success] = "Welcome to Rails sample app"
      redirect_to @user
    else
      @title = "Sign up"
      render 'new'
    end
  end
  
  def edit
    @title = "Edit user"
  end
  
  def update
    if @user.update_attributes(params[:user].permit(:name, :email, :password, :password_confirmation))
      flash[:success] = "profile updated!"
      redirect_to @user 
    else
      @title = "Edit user"
      render 'edit'
    end
  end
  
  private 
  
  def correct_user
    @user = User.find(params[:id])
    redirect_to(root_path) unless current_user?(@user)
  end
  def admin_user
    redirect_to(root_path) unless current_user.admin?
  end
end
