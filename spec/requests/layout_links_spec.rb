require 'spec_helper'

RSpec.describe "LayoutLinks", type: :request do
  
  describe "layout_links" do
        
    it "Should have home page at /",  type: :feature do
      visit root_path
      page.should have_title('Home')
    end
    
    it "Should have home page at /contact",  type: :feature do
      visit contact_path
      page.should have_title('Contact')
    end
    
    it "Should have home page at /help",  type: :feature do
      visit help_path
      page.should have_title('Help')
    end
    
    it "Should have home page at /about",  type: :feature do
      visit about_path
      page.should have_title('About')
    end
    
    it "Should have home page at /signup",  type: :feature do
      visit signup_path
      page.should have_title('Sign up')
    end
    
    it "should have right links on the layout", type: :feature do
      visit root_path
      click_link "Home"
      page.should have_title('Home')
      click_link "Contact"
      page.should have_title('Contact')
      click_link "About"
      page.should have_title('About')
      click_link "Help"
      page.should have_title('Help')
      visit root_path
      click_link "Sign Up"
      page.should have_title('Sign up')
    end
        
  end
end
