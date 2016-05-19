OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '448407561867638', '291aa3bb3681933649c11589a55ca136'
end
