Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/users/profile' => "users#profile"
  

  devise_for :users do
    resources :users 
  end
  
  resources :users 

  resources :events do
    resources :gifts
  end
  
  
  root 'application#index'
end