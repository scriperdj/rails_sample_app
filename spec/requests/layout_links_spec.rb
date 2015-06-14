require 'spec_helper'

RSpec.describe "LayoutLinks", type: :request do
  
  describe "layout_links" do
        
    it "Should have home page at /",  type: :feature do
      visit '/'
      page.should have_title('Home')
    end
    
    it "Should have home page at /contact",  type: :feature do
      visit '/contact'
      page.should have_title('Contact')
    end
    
    it "Should have home page at /help",  type: :feature do
      visit '/help'
      page.should have_title('Help')
    end
    
    it "Should have home page at /about",  type: :feature do
      visit '/about'
      page.should have_title('About')
    end
    
    it "Should have home page at /signup",  type: :feature do
      visit '/signup'
      page.should have_title('Sign up')
    end
        
  end
end
