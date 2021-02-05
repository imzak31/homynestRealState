class Api::HousesController < ApplicationController
    def index 
        if params[:search]     
            if params[:search][:bounds]        
                @houses = House.in_bounds(params[:search][:bounds])
            elsif params[:search][:city]
                @houses = params[:search][:city] == [] ? 
                    House.all : 
                    House.where(city: params[:search][:city])
            else 
                 @houses = House.all
            end

            if params[:search][:price]
                @houses = @houses.where(:price => params[:search][:price])
            end

            if params[:search][:types]
                @houses = @houses.where(:type => params[:search][:types])
            end
            
            # if params[:search][:name]
            #     @houses = @houses.where(:name => params[:search][:name])
            # end
        else 
            @houses = House.all
        end
        render :index
    end 

    def show 
        @house = House.find(params[:id])
    end 


    private 
    def narrowSearch(array)
        res = []
        array.each {|keyword| res.concat(House.search_by_key(keyword))}
        counts = Hash.new(0)
        res.each{ |ele| counts[ele] += 1}
        counts.select{|v,count| count > 1}.keys
    end
end
