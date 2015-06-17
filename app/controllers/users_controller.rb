class UsersController < ApplicationController
  
  def new
    @user = User.new
    @title = "Sign up"
  end
  
  def show
    @user = User.find(params[:id])
    @title = @user.name
  end
  
  def create
    @user = User.new(params[:user].permit(:name, :email, :password, :password_confirmation))
    if @user.save
      #save user info
      flash[:success] = "Welcome to Rails sample app"
      redirect_to @user
    else
      @title = "Sign up"
      render 'new'
    end
  end
  
end
