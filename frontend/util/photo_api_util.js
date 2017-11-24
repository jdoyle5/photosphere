export const fetchPhotos = photos => (
  $.ajax({
    method: 'GET',
    url: 'api/photos',
    photos
  })
);
