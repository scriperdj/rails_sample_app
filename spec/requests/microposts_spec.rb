require 'spec_helper'

describe "Microposts", type: :controller do
  describe "creation", type: :feature do
  before(:each) do
	user = FactoryGirl.create(:user)
	visit signin_path
	fill_in "Email",	:with => user.email
	fill_in "Password", :with => user.password
	click_button "Sign in"
  end
  
	describe "failure" do
	  it "should not make a new micropost" do
	    lambda do
		  visit root_path
		  fill_in "micropost_content", :with => ""
		  click_button "Submit"
		#  page.should render_template('pages/home')
		  page.should have_selector("div#error_explanation")
		end.should_not change(Micropost, :count)
	  end
    end
    describe "success" do
	  it "should make a new micropost" do
		content = "Lorem ipsum dolor sit amet"
		lambda do
		  visit root_path
		  fill_in "micropost_content", :with => content
		  click_button "Submit"
		#  response.should have_selector("span.content", :text => content)
		end.should change(Micropost, :count).by(1)
	  end
	end
  end 
  
end
