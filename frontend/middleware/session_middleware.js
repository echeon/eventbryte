import * as API from '../util/session_api_util';
import * as types from '../actions/ActionTypes';
import * as actions from '../actions/session_actions';

export default ({ getState, dispatch }) => next => action => {
  const success = user => dispatch(actions.receiveCurrentUser(user));
  const error = xhr => dispatch(actions.receiveErrors(xhr.responseJSON));

  switch(action.type) {
    case types.LOGIN:
      API.login(action.user, success, error);
      return next(action);

    case types.LOGOUT:
      const logoutSuccess = () => next(action);
      API.logout(logoutSuccess, error);
      break;

    case types.SIGNUP:
      API.signup(action.user, success, error);
      return next(action);

    default:
      return next(action);
  }
};
