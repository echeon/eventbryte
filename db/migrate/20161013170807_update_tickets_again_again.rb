class UpdateTicketsAgainAgain < ActiveRecord::Migration
  def change
    remove_column :tickets, :name, :string
    remove_column :tickets, :price, :float
  end
end
