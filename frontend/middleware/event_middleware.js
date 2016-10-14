import * as types from '../actions/ActionTypes';
import * as actions from '../actions/event_actions';
import * as API from '../util/event_api_util';
import { hashHistory } from 'react-router';

export default({ getState, dispatch }) => next => action => {
  let success;

  switch(action.type) {
    case types.CREATE_EVENT:
      success = data => {
        dispatch(actions.receiveEvent(data));
        hashHistory.push(`/events/${data.id}`);
      };
      API.createEvent(action.thisEvent, success);
      return next(action);

    case types.UPDATE_FILTER:
      const newFilter = {[action.filter]: action.value};
      dispatch(actions.requestEvents(newFilter));
      return next(action);

    case types.REQUEST_EVENTS:
      const filters = getState().filters;
      let newFilters = Object.assign({}, filters, action.newFilter);
      success = data => dispatch(actions.receiveEvents(data));
      API.fetchEvents(newFilters, success);
      return next(action);

    case types.REQUEST_EVENT:
      success = data => dispatch(actions.receiveEvent(data));
      API.fetchEvent(action.id, success);
      return next(action);

    case types.UPDATE_EVENT:
      success = data => {
        dispatch(actions.receiveEvent(data));
        hashHistory.push(`/events/${data.id}`);
      };
      API.updateEvent(action.id, action.thisEvent, success);
      return next(action);

    case types.DESTROY_EVENT:
      success = data => dispatch(actions.removeEvent(data));
      API.destroyEvent(action.id, success);
      break;

    default:
      return next(action);
  }
};
