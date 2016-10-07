export const createEvent = (thisEvent, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: {event: thisEvent},
    success
  });
};

export const fetchEvent = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`,
    success
  });
};
