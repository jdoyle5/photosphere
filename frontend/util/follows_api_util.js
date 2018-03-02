export const fetchFollowers = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/follows/followers`
  })
);
