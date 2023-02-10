Rails.application.routes.draw do
  resources :want_sneakers
  resources :users
  resources :sneakers
  resources :posts
  resources :own_sneakers
  resources :comments
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
end
