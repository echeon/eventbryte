class ChangeColumnNameFromEvents < ActiveRecord::Migration
  def change
    rename_column :events, :max_seats, :num_tickets

    add_column :events, :ticket_price, :float, null: false
  end
end
