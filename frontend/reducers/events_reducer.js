import * as types from '../actions/ActionTypes';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.RECEIVE_EVENTS:
      const newEvents = {};
      action.events.forEach(thisEvent => {
        newEvents[thisEvent.id] = thisEvent;
      });
      return newEvents;

    case types.RECEIVE_EVENT:
      const newEvent = {[action.thisEvent.id]: action.thisEvent};
      return Object.assign({}, state, newEvent);

    case types.REMOVE_EVENT:
      const newState = Object.assign({}, state);
      delete newState[action.thisEvent.id];
      return newState;

    default:
      return state;
  }
};

export default EventsReducer;
