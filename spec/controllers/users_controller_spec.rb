require 'spec_helper'

RSpec.describe UsersController, type: :controller do
  
  render_views

  describe "GET #new", type: :feature do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
    
    it "should have right title" do
      visit signup_path
      page.should have_title("Sign up")
    end
    
  end

end
