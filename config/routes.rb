Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: :create
    resources :events, only: [:create, :destroy, :update]

    resource :session, only: [:create, :destroy]
  end
end
