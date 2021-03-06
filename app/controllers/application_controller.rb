class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> {request.format.json}
  before_action :configure_permitted_parameters, if: :devise_controller?
  skip_before_action :verify_authenticity_token

  respond_to :json

  def index
    render 'application/index'
  end
  
  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me, :first_name, :last_name, :address, :city, :gender]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end

