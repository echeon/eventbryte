class UpdateEventsDescriptionColumn < ActiveRecord::Migration
  def change
    change_column :events, :description, :text, null: false
  end
end
