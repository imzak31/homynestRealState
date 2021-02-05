class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.integer :house_id
      t.integer :user_id
      t.integer :party
      t.string :time
      t.string :date

      t.timestamps
    end
  end
end
