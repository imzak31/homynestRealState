class Reservation < ApplicationRecord
    
    validates :house_id, :user_id, :party, :time, :date, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
        # optional: true

    belongs_to :house,
        primary_key: :id,
        foreign_key: :house_id,
        class_name: :House
        # optional: true
end
