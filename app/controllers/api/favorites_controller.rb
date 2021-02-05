class Api::FavoritesController < ApplicationController
  
  
  def index
    user = User.find_by(id: params[:userId])
    if user
      @favorites = user.favorites
      # @favorited_houses = user.favorited_houses
    else
      render json: ["User not found"], status: 404
    end
  end
  
  def show
    @favorite = Favorite.find(params[:id])
  end
  
  def create
    @favorite = Favorite.new
    @favorite.user_id = current_user.id
    @favorite.house_id = params[:id]
    if @favorite.save
      # @houses = @favorite.houses
      @favorite
      # render 'api/houses/show'
      render :show
    else
      render json: @favorite.errors.full_messages, status: 401
    end
  end

  def destroy
    @favorite = Favorite.find_by(user_id: current_user.id, house_id: params[:id])

    if @favorite
      @house = @favorite.house
      @favorite.destroy
      render 'api/houses/show'
      # render json: @favorite
    else
      render json: ["Favorite doesn't exist"], status: 404
    end

  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :house_id)
  end
end
