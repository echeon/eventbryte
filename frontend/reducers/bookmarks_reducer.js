import * as types from '../actions/ActionTypes';

const BookmarksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case types.RECEIVE_BOOKMARKS:
      const newBookmarks = {};
      action.bookmarks.forEach(bookmark => {
        newBookmarks[bookmark.id] = bookmark;
      });
      return Object.assign({}, state, newBookmarks);

    case types.RECEIVE_BOOKMARK:
      const newBookmark = {[action.bookmark.id]: action.bookmark};
      return Object.assign({}, state, newBookmark);

    case types.REMOVE_BOOKMARK:
      const newState = Object.assign({}, state);
      delete newState[action.bookmark.id];
      return newState;

    default:
      return state;
  }
};

export default BookmarksReducer;
