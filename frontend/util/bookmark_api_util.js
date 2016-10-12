export const destroyBookmark = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${id}`,
    success
  });
};

export const createBookmark = (bookmark, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/bookmarks',
    data: { bookmark },
    success
  });
};

export const requestBookmarks = (currentUser, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/bookmarks',
    data: {current_user_id: currentUser.id},
    success
  });
};
