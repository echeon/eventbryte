import * as t from '../actions/ActionTypes';

const TypesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case t.RECEIVE_TYPES:
      const newTypes = {};
      action.types.forEach(type => {
        newTypes[type.id] = type;
      });
      return Object.assign({}, state, newTypes);
    default:
      return state;
  }
};

export default TypesReducer;
