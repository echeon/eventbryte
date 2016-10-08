json.array! @categories do |category|
  json.id category.id
  json.name category.name
  json.subcategories category.subcategories do |subcategory|
    json.extract! subcategory, :id, :name
  end
end
