class User < ActiveRecord::Base
  #attr_accessible :name, :email
  
  def create
    User.create(user_params)
  end
  
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  
  validates(:name, :presence => true,:length=>{:maximum=>50})
  validates(:email, :presence => true, :format => {:with => email_regex}, :uniqueness => {:case_sensitive=>false})
  
  private
  
    def user_params
      params.require(:user).permit(:name, :email)
    end
    
end
