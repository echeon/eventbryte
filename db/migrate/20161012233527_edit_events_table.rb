class EditEventsTable < ActiveRecord::Migration
  def change
    change_column :events, :venue_name, :string, null: true
    add_column :events, :address_detail, :string
  end
end
