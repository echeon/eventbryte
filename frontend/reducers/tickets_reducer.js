import * as types from '../actions/ActionTypes';

const TicketsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.RECEIVE_TICKETS:
      const newTickets = {};
      action.tickets.forEach(ticket => {
        newTickets[ticket.id] = ticket;
      });
      return Object.assign({}, state, newTickets);

    case types.RECEIVE_TICKET:
      const newTicket = {[action.ticket.id]: action.ticket};
      return Object.assign({}, state, newTicket);

    case types.REMOVE_TICKET:
      const newState = Object.assign({}, state);
      delete newState[action.ticket.id];
      return newState;

    default:
      return state;
  }
};

export default TicketsReducer;
