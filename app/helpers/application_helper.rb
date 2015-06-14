module ApplicationHelper
#Define the title per page 
  def title
    base_title = "Rails sample app"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
end
