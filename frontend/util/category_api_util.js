export const fetchCategories = success => {
  $.ajax({
    method: 'GET',
    url: '/api/categories',
    success
  });
};
