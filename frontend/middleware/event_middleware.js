import * as types from '../actions/ActionTypes';
import * as actions from '../actions/event_actions';
import * as API from '../util/event_api_util';

export default({ getState, dispatch }) => next => action => {
  const error = xhr => dispatch(actions.receiveErrors(xhr.responseJSON));
  let success;
  switch(action.type) {
    case types.CREATE_EVENT:
      success = data => dispatch(actions.receiveEvent(data));
      API.createEvent(action.singleEvent, success, error);
      return next(action);
    default:
      return next(action);
  }
};
