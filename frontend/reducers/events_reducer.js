import * as types from '../actions/ActionTypes';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case types.RECEIVE_EVENT:
      const newEvent = {[action.singleEvent.id]: action.singleEvent};
      return Object.assign({}, state, newEvent);
    default:
      return state;
  }
};

export default EventsReducer;
