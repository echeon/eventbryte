# == Schema Information
#
# Table name: events
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  description    :text             not null
#  organizer_id   :integer          not null
#  type_id        :integer          not null
#  category_id    :integer          not null
#  subcategory_id :integer          not null
#  start_date     :date             not null
#  start_time     :time             not null
#  end_date       :date             not null
#  end_time       :time             not null
#  lat_long       :point            not null
#  image_url      :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  venue_name     :string           not null
#

class Event < ActiveRecord::Base
  validates :title, :description, presence: true
  validates :organizer_id, :type_id, :category_id, :subcategory_id, presence: true
  validates :start_date, :start_time, :end_date, :end_time, presence: true
  validates :venue_name, :lat_long, presence: true

  belongs_to(
    :organizer,
    class_name: "User",
    foreign_key: :organizer_id,
    primary_key: :id
  )

  belongs_to(
    :type,
    class_name: "Type",
    foreign_key: :type_id,
    primary_key: :id
  )

  belongs_to(
    :category,
    class_name: "Category",
    foreign_key: :category_id,
    primary_key: :id
  )

  belongs_to(
    :subcategory,
    class_name: "Subcategory",
    foreign_key: :subcategory_id,
    primary_key: :id
  )

end
