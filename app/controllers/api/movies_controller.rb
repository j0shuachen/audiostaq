class Api::MoviesController < ApplicationController

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      render :show
    else
      render json: @movie.errors.full_messages, status: 422 # unprocessable entity
    end

  end

  def show
    @movie = Movie.joins(:user).includes(:user).find(params[:id])
    if @movie
      render :show
    else
      render(
        json: ["Error"],
        status: 404
      )
    end
  end

  def index
    # @movies = Movie.all.includes(:user)
    if params[:rating] != '0' && params[:rating] != ''
      # @movies = Movie.joins(:ratings).having('AVG(ratings.rating) >=?', params[:rating].to_i).group('movies.id').where('lower(title) LIKE ? and release LIKE ?', "%#{params[:title].downcase}%", "%#{params[:release]}%")
      @movies = Movie.joins(:ratings).having('AVG(ratings.rating) >=?', params[:rating].to_i).group('movies.id').where('lower(title) LIKE ? and release LIKE ?', "%#{params[:title].downcase}%", "#{params[:month]}%#{params[:day]}%#{params[:year]}")

    else
      @movies = Movie.where('lower(title) LIKE ? and release LIKE ?', "%#{params[:title].downcase}%", "#{params[:month]}%#{params[:day]}%#{params[:year]}")
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :trailer, :poster, :user_id, :release)
  end

end
