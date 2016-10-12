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

export const selectSavedEvents = (events, bookmarks = {}) => {
  const bookmarkedEvents = {};
  Object.keys(bookmarks).forEach(key => {
    bookmarkedEvents[key] = events[bookmarks[key].event_id];
  });
  return bookmarkedEvents;
};
