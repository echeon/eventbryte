import * as types from '../actions/ActionTypes';

const FiltersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case types.UPDATE_FILTER:
      const newFilter = {[action.filter]: action.value};
      return Object.assign({}, state, newFilter);

    default:
    return state;
  }
};

export default FiltersReducer;
