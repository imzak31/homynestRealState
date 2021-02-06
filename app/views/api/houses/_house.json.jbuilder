json.extract! house, :id, :name, :address, :sqm, :state, :zip, :price,:sort,:open_time,:close_time, :phone_number,:description, :photo, :lat, :lng

json.countRating house.ratings.pluck(:user_id).length
json.score_arr house.score_arr
if current_user
  json.userFavorited !!house.favorites.find_by(user_id: current_user.id)
end
