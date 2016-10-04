class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username and/or password"], status: 422
    end
  end

  def destroy
    if current_user.nil?
      render json: ["No one is currently logged in"], status: 404
    else
      logout!
      render json: {}
    end
  end
end
