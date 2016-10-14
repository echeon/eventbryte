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

export const selectUpcomingEvents = (events, tickets = {}) => {
  const upcomingEvents = {};

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = today.getDate();
  const parsedToday = [year, month, date].join("-");

  Object.keys(tickets).forEach(key => {
    if (events[tickets[key].event_id]) {
      if (events[tickets[key].event_id].start_date >= parsedToday) {
        upcomingEvents[key] = events[tickets[key].event_id];
      }
    }
  });
  return upcomingEvents;
};

export const selectPastEvents = (events, tickets = {}) => {
  const pastEvents = {};

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const date = today.getDate();
  const parsedToday = [year, month, date].join("-");

  Object.keys(tickets).forEach(key => {
    if (events[tickets[key].event_id]) {
      if (events[tickets[key].event_id].start_date < parsedToday) {
        pastEvents[key] = events[tickets[key].event_id];
      }
    }
  });
  return pastEvents;
};
