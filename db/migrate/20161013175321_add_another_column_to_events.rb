class AddAnotherColumnToEvents < ActiveRecord::Migration
  def change
    add_column :events, :max_seats, :integer
  end
end
