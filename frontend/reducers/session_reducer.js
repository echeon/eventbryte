import * as types from '../actions/ActionTypes';

const defaultSession = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultSession, action) => {
  Object.freeze(state);

  let newState;

  switch(action.type) {
    case types.RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };

    case types.RECEIVE_ERRORS:
      return {
        currentUser: null,
        errors: action.errors
      };

    case types.LOGOUT:
      return defaultSession;

    default:
      return state;
  }
};

export default SessionReducer;
