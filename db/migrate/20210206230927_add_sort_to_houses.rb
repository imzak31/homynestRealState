class AddSortToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :sort, :string
  end
end
