import * as t from '../actions/ActionTypes';
import * as actions from '../actions/types_actions';
import * as API from '../util/types_api_util';

export default({ getState, dispatch }) => next => action => {
  const error = xhr => dispatch(actions.receiveErrors(xhr.responseJSON));
  let success;
  switch(action.type) {
    case t.REQUEST_TYPES:
      success = data => dispatch(actions.receiveTypes(data));
      API.fetchTypes(success);
      break;
    default:
      return next(action);
  }
};
