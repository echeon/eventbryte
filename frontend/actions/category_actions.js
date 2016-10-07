import * as t from './ActionTypes';

export const requestCategories = () => {
  return {
    type: t.REQUEST_CATEGORIES
  };
};

export const receiveCategories = categories => {
  return {
    type: t.RECEIVE_CATEGORIES,
    categories
  };
};
