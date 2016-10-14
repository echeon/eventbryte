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

export const updateEvent = (id, thisEvent) => {
  return {
    type: t.UPDATE_EVENT,
    id,
    thisEvent
  };
};

export const requestEvents = (newFilter) => {
  return {
    type: t.REQUEST_EVENTS,
    newFilter: newFilter || {}
  };
};

export const receiveEvents = events => {
  return {
    type: t.RECEIVE_EVENTS,
    events
  };
};

export const removeEvent = thisEvent => {
  return {
    type: t.REMOVE_EVENT,
    thisEvent
  };
};

export const destroyEvent = id => {
  return {
    type: t.DESTROY_EVENT,
    id
  };
};
