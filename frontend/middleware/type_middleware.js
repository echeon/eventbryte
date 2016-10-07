import * as t from '../actions/ActionTypes';
import * as actions from '../actions/type_actions';
import * as API from '../util/type_api_util';

export default({ getState, dispatch }) => next => action => {
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
