class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

  def create
    @event = Event.new(event_params)

    # !!! DELETE AFTER IMPLEMENTING SUBCATEGORY
    @event.subcategory_id = 1

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

  def event_params
    params.require(:event).permit(
      :title, :description, :organizer_id, :type_id, :category_id,
      :subcategory_id, :start_date, :start_time, :end_date, :end_time,
      :venue_name, :lat, :lng, :image_url
    )
  end

end
