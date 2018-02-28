Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :photos, only: [:index]
    end
    resources :photos, only: [:create, :destroy, :index, :show, :update] do
      resources :comments, only: [:index]
      resources :tags, only: [:index]
    end
    resources :tags, only:[:create, :show, :index] do
      resources :photos, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :comments, only:[:index, :create, :update, :destroy, :show]
    resource :like, only:[:create, :destroy]
  end
end
