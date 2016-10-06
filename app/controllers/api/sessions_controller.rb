class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      if User.find_by_email(params[:user][:email])
        render json: ["Hmmm, we don't recognize that password. Please try again."], status: 422
      else
        render json: ["Looks like you don't have an account yet. Let's change that!"], status: 422
      end
    end
  end

  def destroy
    if current_user.nil?
      render json: ["Who are you? Nobody is supposed to be logged in."], status: 404
    else
      logout!
      render json: {}
    end
  end
end
