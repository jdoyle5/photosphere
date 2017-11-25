export const fetchPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const postPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo }
  })
);

export const destroyPhoto = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);

export const fetchUserPhotos = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/photos`
  })
);
