export const fetchTags = photoId => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${photoId}/tags`
  })
);

export const fetchTag = (tagId) => (
  $.ajax({
    method: 'GET',
    url: `api/tags/${tagId}`
  })
);

export const postTag = tag => (
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: { tag }
  })
);
