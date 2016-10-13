class CreateTicketType < ActiveRecord::Migration
  def change
    create_table :ticket_types do |t|
      t.integer :event_id, null: false
      t.string :name, null: false
      t.float :price, null: false
    end

    add_index :ticket_types, :event_id
  end
end
