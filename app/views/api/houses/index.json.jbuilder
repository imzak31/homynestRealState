@houses.each do |house|
    json.set! house.id do 
        # json.extract! house, :id, :name, :address, :city, :state, :zip, :price,:cuisine,:open_time,:close_time, :phone_number,:description
        # json.photoURL url_for(house.photo)
        # json.bphotoURL url_for(house.bphoto)
        json.partial! '/api/houses/house', house: house
    end
end