class Relationship < ActiveRecord::Base

  def create
    Relationship.create(relationship_params)
  end
  
  belongs_to :follower, :class_name => "User"
  belongs_to :followed, :class_name => "User"
  
  validates :follower_id, :presence => true
  validates :followed_id, :presence => true
  
  private
  
  def relationship_params
    params.require(:relationship).permit(:followed_id)
  end
end
