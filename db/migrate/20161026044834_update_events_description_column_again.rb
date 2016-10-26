class UpdateEventsDescriptionColumnAgain < ActiveRecord::Migration
  def change
    change_column :events, :description, :text, null: true
  end
end
