class UpdateTickets < ActiveRecord::Migration
  def change
    remove_column :tickets, :quantity, :integer
    add_column :tickets, :user_id, :integer, null: false

    add_index :tickets, :user_id
  end
end
