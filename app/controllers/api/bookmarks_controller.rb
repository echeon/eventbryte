class Api::BookmarksController < ApplicationController
  def index
    if params[:current_user_id]
      @bookmarks = Bookmark.all.where(user_id: params[:current_user_id])
    else
      @bookmarks = Bookmark.all
    end
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)

    if @bookmark.save
      render json: @bookmark
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookmark = Bookmark.find_by_id(params[:id])
    @bookmark.destroy
    render json: @bookmark
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:user_id, :event_id)
  end

end
