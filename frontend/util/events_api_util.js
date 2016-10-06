export const createEvent = (singleEvent, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { singleEvent },
    success,
    error
  });
};
