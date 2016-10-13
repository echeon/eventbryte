export const destroyTicket = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/tickets/${id}`,
    success
  });
};

export const createTicket = (ticket, success) => {
  $.ajax({
    method: 'POST',
    url: '/api/tickets',
    data: { ticket },
    success
  });
};

export const requestTickets = (currentUser, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/tickets',
    data: {current_user_id: currentUser.id},
    success
  });
};
