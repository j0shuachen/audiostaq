class Api::RatingsController < ApplicationController

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422 # unprocessable entity
    end
  end

  def show
    @rating = Rating.find(params[:id])
    if @ratings
      render :show
    else
      render(
        json: ["Error"],
        status: 404
      )
    end
  end

  def index
    @ratings = Rating.all
    render :index
  end

  private

  def rating_params
    params.require(:rating).permit(:movie_id, :user_id, :rating)
  end

end
