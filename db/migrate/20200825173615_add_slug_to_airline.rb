class AddSlugToAirline < ActiveRecord::Migration[6.0]
  def change
    add_column :airlines, :slug, :string
  end
end
