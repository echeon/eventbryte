import * as t from './ActionTypes';

export const createEvent = singleEvent => {
  return {
    type: t.CREATE_EVENT,
    singleEvent
  };
};

export const receiveEvent = singleEvent => {
  return {
    type: t.RECEIVE_EVENT,
    singleEvent
  };
};

export const receiveErrors = errors => {
  return {
    type: t.RECEIVE_ERRORS,
    errors
  };
};
