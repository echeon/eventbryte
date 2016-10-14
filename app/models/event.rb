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
#  num_tickets    :integer
#  ticket_price   :float            not null
#
require 'date'

class Event < ActiveRecord::Base
  validates :title, :description, presence: true
  validates :organizer_id, :type_id, :category_id, :subcategory_id, presence: true
  validates :start_date, :start_time, :end_date, :end_time, presence: true
  validates :place_id, :num_tickets, :ticket_price, presence: true

  has_many(
    :tickets,
    class_name: "Ticket",
    foreign_key: :event_id,
    primary_key: :id
  )
  
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

  def self.by_type_and_category_and_subcategory(type_id, category_id, subcategory_id)
    type_id = type_id.to_i
    category_id = category_id.to_i
    subcategory_id = subcategory_id.to_i

    today = Date.today.strftime('%F')

    if type_id > 0 && category_id > 0 && subcategory_id > 0
      return self.where(type_id: type_id, category_id: category_id, subcategory_id: subcategory_id).where('start_date > ?', today)
    elsif type_id > 0 && category_id > 0 && subcategory_id == 0
      return self.where(type_id: type_id, category_id: category_id).where('start_date > ?', today)
    elsif type_id > 0 && category_id == 0
      return self.where(type_id: type_id).where('start_date > ?', today)
    elsif type_id == 0 && category_id > 0 && subcategory_id > 0
      return self.where(category_id: category_id, subcategory_id: subcategory_id).where('start_date > ?', today)
    elsif type_id == 0 && category_id > 0 && subcategory_id == 0
      return self.where(category_id: category_id).where('start_date > ?', today)
    else
      return self.where('start_date > ?', today)
    end
  end
end
