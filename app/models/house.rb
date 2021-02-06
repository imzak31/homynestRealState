class House < ApplicationRecord
    validates :name, :address, :sqm, :state, :zip, :price,:sort,:open_time,:close_time, :phone_number, :description, presence: true

      #associations 
      has_many :reservations,
      primary_key: :id,
      foreign_key: :house_id,
      class_name: :Reservation

  has_many :ratings,
      primary_key: :id,
      foreign_key: :house_id,
      class_name: :Rating

  has_many :favorites, 
      primary_key: :id, 
      foreign_key: :house_id,
      class_name: :Favorite
  

  def self.search_by_key(keyword)
      House.where("lower(sqm) like ?", "%#{keyword.downcase}%")
          .or(House.where("lower(sort) like ?", "%#{keyword.downcase}%"))
          .or(House.where("lower(name) like ?", "%#{keyword.downcase}%"))
          .or(House.where("price = ?", "#{keyword}"))
  end

  def self.in_bounds(bounds)
      ne_lat = bounds[:northEast][:lat].to_f
      ne_lng = bounds[:northEast][:lng].to_f
      sw_lat = bounds[:southWest][:lat].to_f
      sw_lng = bounds[:southWest][:lng].to_f

      House.where("lat between ? AND ? AND lng between ? AND ?", sw_lat, ne_lat,sw_lng, ne_lng)
  end

  def score_arr
      self.ratings.pluck(:overall_score)
  end
  

end
