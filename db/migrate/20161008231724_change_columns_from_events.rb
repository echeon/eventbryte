class ChangeColumnsFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :lat, :string
    remove_column :events, :lng, :string
    add_column :events, :place_id, :string, null: false
  end
end
