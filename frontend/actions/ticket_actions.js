import * as types from './ActionTypes';

export const createTicket = ticket => {
  return {
    type: types.CREATE_TICKET,
    ticket
  };
};

export const receiveTicket = ticket => {
  return {
    type: types.RECEIVE_TICKET,
    ticket
  };
};

export const destroyTicket = id => {
  return {
    type: types.DESTROY_TICKET,
    id
  };
};

export const removeTicket = ticket => {
  return {
    type: types.REMOVE_TICKET,
    ticket
  };
};

export const requestTickets = (currentUser) => {
  return {
    type: types.REQUEST_TICKETS,
    currentUser
  };
};

export const receiveTickets = tickets => {
  return {
    type: types.RECEIVE_TICKETS,
    tickets
  };
};
