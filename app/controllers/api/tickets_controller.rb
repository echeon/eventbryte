class Api::TicketsController < ApplicationController
  def index
    if params[:current_user_id]
      @tickets = Ticket.all.where(user_id: params[:current_user_id])
    else
      @tickets = Ticket.all
    end
  end

  def create
    @ticket = Ticket.new(ticket_params)

    if @ticket.save
      render json: @ticket
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket = Ticket.find_by_id(params[:id])
    @ticket.destroy
    render json: @ticket
  end

  private

  def ticket_params
    params.require(:ticket).permit(:user_id, :event_id)
  end

end
