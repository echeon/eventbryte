class Api::EventsController < ApplicationController
  def index
    if params[:user_id]
      @events = Event.all.where(organizer_id: params[:user_id])
    else
      @events = Event.all
    end
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by_id(params[:id])

    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    @event.destroy
    render json: @event
  end

  private

  def event_params
    params.require(:event).permit(
      :title, :description, :organizer_id, :type_id, :category_id,
      :subcategory_id, :start_date, :start_time, :end_date, :end_time,
      :venue_name, :place_id, :image_url, :address_detail, :max_seats
    )
  end

end
