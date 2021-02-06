class Api::HousesController < ApplicationController
    def index 
        if params[:search]     
            if params[:search][:bounds]        
                @houses = House.in_bounds(params[:search][:bounds])
            elsif params[:search][:sort]
                @houses = params[:search][:sort] == [] ? 
                    House.all : 
                    House.where(sort: params[:search][:sort])
            else 
                 @houses = House.all
            end

            if params[:search][:price]
                @houses = @houses.where(:price => params[:search][:price])
            end

            if params[:search][:sorts]
                @houses = @houses.where(:sort => params[:search][:sorts])
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
