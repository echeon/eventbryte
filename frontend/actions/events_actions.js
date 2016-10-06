import * as types from './ActionTypes';

export const createEvent = singleEvent => {
  return {
    type: types.CREATE_EVENT,
    singleEvent
  };
};

export const receiveEvent = singleEvent => {
  return {
    type: types.RECEIVE_EVENT,
    singleEvent
  };
};

export const receiveErrors = errors => {
  return {
    type: types.RECEIVE_ERRORS,
    errors
  };
};
