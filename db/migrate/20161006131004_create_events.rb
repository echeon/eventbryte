class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.integer :organizer_id, null: false
      t.integer :type_id, null: false
      t.integer :category_id, null: false
      t.integer :subcategory_id, null: false

      t.date :start_date, null: false
      t.time :start_time, null: false
      t.date :end_date, null: false
      t.time :end_time, null: false

      t.point :lat_long, null: false

      t.string :image_url

      t.timestamps null: false
    end
  end
end
