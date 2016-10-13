class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :event_id, null: false
      t.string :name, null: false
      t.integer :quantity, null: false
      t.float :price, null: false

      t.timestamps
    end

    add_index :tickets, :event_id
  end
end
