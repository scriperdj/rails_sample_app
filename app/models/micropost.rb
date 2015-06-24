class Micropost < ActiveRecord::Base
  
  def create
    Micropost.create(micropost_params)
  end
  
  belongs_to :user
  
  validates :content, :presence => true, :length => { :maximum => 140 }
  validates :user_id, :presence => true
  
  default_scope { order('microposts.created_at DESC') } 
  
  scope :from_users_followed_by, lambda { |user| followed_by(user) }
  
  def self.from_users_followed_by(user)
	followed_ids = user.following.map(&:id).join(", ")
	where("user_id IN (#{followed_ids}) OR user_id = ?", user)
  end
 

  private
  
  def micropost_params
      params.require(:micropost).permit(:content)
  end
  
  def self.followed_by(user)
	followed_ids = user.following.map(&:id).join(", ")
	where("user_id IN (#{followed_ids}) OR user_id = :user_id",
	{ :user_id => user })
  end
end
