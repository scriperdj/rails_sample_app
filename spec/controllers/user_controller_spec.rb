require 'spec_helper'

RSpec.describe UserController, type: :controller do
  
  render_views

  describe "GET #new", type: :feature do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
    
    it "should have right title" do
      visit '/user/new'
      page.should have_title("Sign up")
    end
    
  end

end
