import * as t from '../actions/ActionTypes';
import * as actions from '../actions/category_actions';
import * as API from '../util/category_api_util';

export default({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case t.REQUEST_CATEGORIES:
      success = data => dispatch(actions.receiveCategories(data));
      API.fetchCategories(success);
      break;
    default:
      return next(action);
  }
};
