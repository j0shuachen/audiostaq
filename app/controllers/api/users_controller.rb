class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422 # unprocessable entity
    end
  end

  def show
    @user = User.find(params[:id]).includes(:rating)
    if @user
      render :show
    else
      render(
        json: ["Error"],
        status: 404
      )
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
