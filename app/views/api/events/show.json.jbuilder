json.partial! "api/events/event", event: @event

json.num_tickets_purchased @event.tickets.length
