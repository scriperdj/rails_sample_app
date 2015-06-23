class Micropost < ActiveRecord::Base
  
  def create
    Micropost.create(micropost_params)
  end
  
  belongs_to :user
  
  validates :content, :presence => true, :length => { :maximum => 140 }
  validates :user_id, :presence => true
  
  default_scope { order('microposts.created_at DESC') } 
 

  private
  
  def micropost_params
      params.require(:micropost).permit(:content)
  end
end
