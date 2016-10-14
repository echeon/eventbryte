class Api::EventsController < ApplicationController
  def index
    @events = Event.by_type_and_category_and_subcategory(params[:typeId], params[:categoryId], params[:subcategoryId])
  end

  def show
    @event = Event.includes(:organizer).find_by_id(params[:id])
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
      :venue_name, :place_id, :image_url, :address_detail, :num_tickets,
      :ticket_price
    )
  end

end
