import * as types from '../actions/ActionTypes';

const _defaultFilters = {

};

const FiltersReducer = (state = _defaultFilters, action) => {
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
