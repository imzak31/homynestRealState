class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :user_id
      t.integer :house_id
      t.integer :overall_score
      t.text :review

      t.timestamps
    end
  end
end
