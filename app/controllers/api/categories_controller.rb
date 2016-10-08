class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all.includes(:subcategories)
  end
end
