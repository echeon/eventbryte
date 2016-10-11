import * as types from './ActionTypes';

export const updateFilter = (filter, value) => {
  return {
    type: types.UPDATE_FILTER,
    filter,
    value
  };
};
