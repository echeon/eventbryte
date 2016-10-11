import * as types from '../actions/ActionTypes';

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.RECEIVE_CATEGORIES:
      const newCategories = {};
      action.categories.forEach(category => {
        newCategories[category.id] = category;
      });
      return Object.assign({}, state, newCategories);
    default:
      return state;
  }
};

export default CategoriesReducer;
