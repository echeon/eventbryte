import * as types from '../actions/ActionTypes';

const _defaultFilters = {
  typeId: 0,
  categoryId: 0,
  subcategoryId: 0
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
