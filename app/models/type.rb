# == Schema Information
#
# Table name: types
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Type < ActiveRecord::Base
  has_many(
    :events,
    class_name: "Event",
    foreign_key: :type_id,
    primary_key: :id
  )
end
