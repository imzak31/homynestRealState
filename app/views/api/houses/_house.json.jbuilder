json.extract! house, :id, :name, :address, :city, :state, :zip, :price,:type,:open_time,:close_time, :phone_number,:description, :photo, :bphoto, :menu_link, :lat, :lng
# json.photoURL url_for(house.photo)
# json.bphotoURL url_for(house.bphoto)
json.countRating house.ratings.pluck(:user_id).length
json.score_arr house.score_arr
if current_user
  json.userFavorited !!house.favorites.find_by(user_id: current_user.id)
end
