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
#  start_date     :string           not null
#  start_time     :string           not null
#  end_date       :string           not null
#  end_time       :string           not null
#  image_url      :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  venue_name     :string
#  place_id       :string           not null
#  address_detail :string
#

class Event < ActiveRecord::Base
  validates :title, :description, presence: true
  validates :organizer_id, :type_id, :category_id, :subcategory_id, presence: true
  validates :start_date, :start_time, :end_date, :end_time, presence: true
  validates :place_id, presence: true

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

  after_initialize :ensure_image_url

  def ensure_image_url
    if self.image_url == ""
      self.image_url = "http://res.cloudinary.com/dldbslv2a/image/upload/w_720,h_360,c_crop,c_fill/v1476370258/black-1675383_1280_el9xfh.jpg"
    end
  end

end
