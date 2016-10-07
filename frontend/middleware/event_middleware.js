import * as types from '../actions/ActionTypes';
import * as actions from '../actions/event_actions';
import * as API from '../util/event_api_util';

export default({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case types.CREATE_EVENT:
      success = data => dispatch(actions.receiveEvent(data));
      API.createEvent(action.thisEvent, success);
      return next(action);
    case types.REQUEST_EVENT:
      success = data => dispatch(actions.receiveEvent(data));
      API.fetchEvent(action.id, success);
      break;
    default:
      return next(action);
  }
};
