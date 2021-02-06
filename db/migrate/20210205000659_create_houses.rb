class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    
    create_table :houses do |t|
      t.string :name
      t.string :adress
      t.string :sqm
      t.string :state
      t.string :zip
      t.string :price
      t.string :type
      t.datetime :open_time
      t.datetime :close_time
      t.string :phone_number
      t.string :description

      t.timestamps
    end
  end
end
