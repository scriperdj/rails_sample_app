require 'spec_helper'

RSpec.describe "FriendlyForwardings", type: :request do
  describe "GET /friendly_forwardings", type: :feature do
    describe "should forward",type: :controller do
      it "should redirect to correct requested page after signin" do
        user = FactoryGirl.create(:user)
        visit edit_user_path(user)
        fill_in "Email", :with => user.email
        fill_in "Password", :with => user.name
        click_button "Sign in"
       # response.should render_template('users/edit')
      end
    end
  end
end
