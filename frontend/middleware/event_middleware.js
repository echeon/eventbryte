import * as types from '../actions/ActionTypes';
import * as actions from '../actions/event_actions';
import * as API from '../util/event_api_util';

export default({ getState, dispatch }) => next => action => {
  const eventSuccess = data => dispatch(actions.receiveEvent(data));
  const eventsSuccess = data => dispatch(actions.receiveEvents(data));
  switch(action.type) {
    case types.CREATE_EVENT:
      API.createEvent(action.thisEvent, eventSuccess);
      return next(action);

    case types.REQUEST_EVENTS:
      const filters = getState().filters;
      API.fetchEvents(filters, eventsSuccess);
      break;

    case types.REQUEST_EVENT:
      API.fetchEvent(action.id, eventSuccess);
      return next(action);

    case types.UPDATE_EVENT:
      API.updateEvent(action.id, action.thisEvent, eventSuccess);
      return next(action);

    default:
      return next(action);
  }
};
