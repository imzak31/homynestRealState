@houses.each do |house|
    json.set! house.id do 

        json.partial! '/api/houses/house', house: house
    end
end