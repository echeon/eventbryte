# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ActiveRecord::Base
  has_many(
    :events,
    class_name: "Event",
    foreign_key: :category_id,
    primary_key: :id
  )

  has_many(
    :subcategories,
    class_name: "Subcategory",
    foreign_key: :category_id,
    primary_key: :id
  )
end
