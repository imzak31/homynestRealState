class AddPhotoToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :photo, :string
  end
end
