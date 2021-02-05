class Rating < ApplicationRecord
    
    validates :user_id, :house_id, :review, presence: true;
    validates :overall_score, inclusion: {in: [1,2,3,4,5]}, presence: true;

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :house,
        primary_key: :id,
        foreign_key: :house_id,
        class_name: :House
end
