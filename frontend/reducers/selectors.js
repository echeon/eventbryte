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
