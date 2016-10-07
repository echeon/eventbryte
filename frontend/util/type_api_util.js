export const fetchTypes = success => {
  $.ajax({
    method: 'GET',
    url: '/api/types',
    success
  });
};
