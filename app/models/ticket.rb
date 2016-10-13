# == Schema Information
#
# Table name: tickets
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  user_id    :integer          not null
#

class Ticket < ActiveRecord::Base
  validates :event_id, :user_id, presence: true

  belongs_to(
    :event,
    class_name: "Event",
    foreign_key: :event_id,
    primary_key: :id
  )

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )
end
