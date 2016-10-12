import * as types from './ActionTypes';

export const createBookmark = bookmark => {
  return {
    type: types.CREATE_BOOKMARK,
    bookmark
  };
};

export const receiveBookmark = bookmark => {
  return {
    type: types.RECEIVE_BOOKMARK,
    bookmark
  };
};

export const destroyBookmark = id => {
  return {
    type: types.DESTROY_BOOKMARK,
    id
  };
};

export const removeBookmark = bookmark => {
  return {
    type: types.REMOVE_BOOKMARK,
    bookmark
  };
};

export const requestBookmarks = (currentUser) => {
  return {
    type: types.REQUEST_BOOKMARKS,
    currentUser
  };
};

export const receiveBookmarks = bookmarks => {
  return {
    type: types.RECEIVE_BOOKMARKS,
    bookmarks
  };
};
