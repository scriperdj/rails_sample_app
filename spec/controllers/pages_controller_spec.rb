require 'spec_helper'

describe PagesController do
  render_views
  
  before(:each) do
    @base_title = "Rails sample app | "
  end

  describe "GET 'home'", type: :feature do
    it "should be successful" do
      get 'home'
      response.should be_success
    end
    it "should have right title" do
      visit root_path
      page.should have_title(@base_title + 'Home')
      #expect(page).to have_title "Rails sample app | Home"
    end
  end

  describe "GET 'contact'", type: :feature  do
    it "should be successful" do
      get 'contact'
      response.should be_success
    end
    it "should have right title" do
      visit contact_path
      page.should have_title(@base_title + 'Contact')
      #response.should have_selector("title", :content => @base_title + "Contact")
    end
  end

  describe "GET 'about'", type: :feature  do
    it "should be successful" do
      get 'about'
      response.should be_success
    end
    it "should have the right title" do
      visit about_path
      page.should have_title(@base_title + 'About')
    end
  end
  
  describe "GET 'help'", type: :feature do
    it "should be successful" do
      get 'help'
      response.should be_success
    end
    it "should have the right title" do
      visit help_path
      page.should have_title(@base_title + 'Help')
    end
  end
end
