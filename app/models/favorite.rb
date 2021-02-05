class Favorite < ApplicationRecord
    validates :user_id, :house_id, presence: true
    # validates :user_id, uniqueness: {scope: :house_id, message: "Already Favorited"}
  
    belongs_to :user,
      primary_key: :id, 
      foreign_key: :user_id,
      class_name: :User
  
    belongs_to :house,
      primary_key: :id,
      foreign_key: :house_id,
      class_name: :House
end
