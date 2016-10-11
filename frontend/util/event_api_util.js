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

export const updateEvent = (id, thisEvent, success) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${id}`,
    data: {event: thisEvent},
    success
  });
};

export const fetchEvents = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/events',
    data: filters,
    success
  });
};

export const destroyEvent = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`,
    success
  });
};
