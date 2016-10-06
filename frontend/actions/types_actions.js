import * as t from './ActionTypes';

export const requestTypes = () => {
  return {
    type: t.REQUEST_TYPES,
  };
};

export const receiveTypes = types => {
  return {
    type: t.RECEIVE_TYPES,
    types
  };
};
