Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users do
    resources :users 
  end

  resources :events
  
  root 'application#index'
end