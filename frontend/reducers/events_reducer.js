import * as types from '../actions/ActionTypes';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.RECEIVE_EVENT:
      const newEvent = {[action.thisEvent.id]: action.thisEvent};
      return Object.assign({}, state, newEvent);

    default:
      return state;
  }
};

export default EventsReducer;
