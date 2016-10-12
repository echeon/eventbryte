export const selectEvent = (events, id) => events[id] || {};

export const selectMyEvents = (events, userId) => {
  const myEvents = {};
  Object.keys(events).forEach(key => {
    if (events[key].organizer_id === userId) {
      myEvents[key] = events[key];
    }
  });
  return myEvents;
};

export const selectSavedEvents = (events, bookmarks) => {
  const bookmarkedEvents = {};
  bookmarks.forEach(bookmark => {
    bookmarkedEvents[bookmark.event_id] = events[bookmark.event_id];
  });
  return bookmarkedEvents;
};
