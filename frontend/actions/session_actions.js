import * as types from './ActionTypes';

export const login = (user) => {
  return ({
    type: types.LOGIN,
    user
  });
};

export const logout = () => {
  return ({
    type: types.LOGOUT
  });
};

export const signup = (user) => {
  return ({
    type: types.SIGNUP,
    user
  });
};

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: types.RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: types.RECEIVE_ERRORS,
    errors
  });
};
