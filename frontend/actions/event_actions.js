import * as t from './ActionTypes';

export const createEvent = thisEvent => {
  return {
    type: t.CREATE_EVENT,
    thisEvent
  };
};

export const receiveEvent = thisEvent => {
  return {
    type: t.RECEIVE_EVENT,
    thisEvent
  };
};

export const requestEvent = id => {
  return {
    type: t.REQUEST_EVENT,
    id
  };
};
