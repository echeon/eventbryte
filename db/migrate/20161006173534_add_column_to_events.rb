class AddColumnToEvents < ActiveRecord::Migration
  def change
    add_column :events, :venue_name, :string, null: false
  end
end
