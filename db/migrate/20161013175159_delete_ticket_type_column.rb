class DeleteTicketTypeColumn < ActiveRecord::Migration
  def change
    remove_column :tickets, :ticket_type_id, :integer
  end
end
