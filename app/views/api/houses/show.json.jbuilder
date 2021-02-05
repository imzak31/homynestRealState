# json.house do 
#     json.set! @house.id do 
#         json.extract! @house, :id, :name, :address, :city, :state, :zip, :price,:type,:open_time,:close_time, :phone_number,:description
#     end
# end 

json.house do
  json.partial! '/api/houses/house', house: @house
end

# json.favorite do
#   json.partial! '/api/favorites/favorite', favorite: @favorite
# end

