import * as types from '../actions/ActionTypes';
import * as actions from '../actions/ticket_actions';
import * as API from '../util/ticket_api_util';

export default({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case types.CREATE_TICKET:
      success = data => dispatch(actions.receiveTicket(data));
      API.createBookmark(action.ticket, success);
      break;

    case types.REQUEST_TICKETS:
      success = data => dispatch(actions.receiveTickets(data));
      API.requestTickets(action.currentUser, success);
      break;

    case types.DESTROY_TICKET:
      success = data => dispatch(actions.removeTicket(data));
      API.destroyTicket(action.id, success);
      break;

    default:
      return next(action);
  }
};
