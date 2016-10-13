# == Schema Information
#
# Table name: ticket_types
#
#  id       :integer          not null, primary key
#  event_id :integer          not null
#  name     :string           not null
#  price    :float            not null
#

class TicketType < ActiveRecord::Base
  validates :event_id, :name, :price, presence: true

  belongs_to(
    :event,
    class_name: "Event",
    foreign_key: :event_id,
    primary_key: :id
  )
end
