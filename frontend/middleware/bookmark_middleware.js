import * as types from '../actions/ActionTypes';
import * as actions from '../actions/bookmark_actions';
import * as API from '../util/bookmark_api_util';

export default({ getState, dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case types.CREATE_BOOKMARK:
      success = data => dispatch(actions.receiveBookmark(data));
      API.createBookmark(action.bookmark, success);
      break;

    case types.REQUEST_BOOKMARKS:
      success = data => dispatch(actions.receiveBookmarks(data));
      API.requestBookmarks(action.currentUser, success);
      break;

    case types.DESTROY_BOOKMARK:
      success = data => dispatch(actions.removeBookmark(data));
      API.destroyBookmark(action.id, success);
      break;

    default:
      return next(action);
  }
};
