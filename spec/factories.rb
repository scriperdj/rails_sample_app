FactoryGirl.define do 
  factory :user do |user|
    user.name        "Sathish"
    user.email       "sathish@gmail.com"
    user.password    "foobar"
    user.password_confirmation  "foobar"
  end
end
