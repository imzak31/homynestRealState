class AddCordToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :lat, :float
    add_column :houses, :lng, :float
  end
end
