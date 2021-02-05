class Api::RatingsController < ApplicationController
    def index  
        @current_house = House.find(params[:houseId]) if params[:houseId]
        #if exists
        if @current_house
            @ratings = @current_house.ratings.order(:created_at)
        else 
            render json: ["No House"], status: 404
        end 
    end 

    def show 
        @rating = Rating.find(params[:id])
    end 

    def create 
        @rating = Rating.new(rating_params)
        if @rating.save 
            @rating
            render :show
        else 
            render json: @rating.errors.full_messages, status: 422
        end
    end 

    def update 
        @rating = Rating.find(params[:id])
        if @rating.update_attributes(rating_params)
            render :show
        else 
            render json: @rating.errors.full_messages, status: 422 
        end 
    end 

    def destroy
        @rating = Rating.find(params[:id])
        if @rating.destroy 
            render json: @rating 
        else 
            render json: ["You can't destroy what's not there."], status: 404
        end

    end 

    
    private 

    def rating_params
        params.require(:rating).permit(:user_id, :house_id, :overall_score, :review)
    end

end
