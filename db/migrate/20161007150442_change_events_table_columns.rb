class ChangeEventsTableColumns < ActiveRecord::Migration
  def change
    remove_column :events, :lat_long, :point
    add_column :events, :lat, :string, null: false
    add_column :events, :lng, :string, null: false
  end
end
