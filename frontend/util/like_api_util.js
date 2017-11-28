export const postLikeToPhoto = photoId => (
  $.ajax({
    method: 'POST',
    url: 'api/like',
    data: { photoId }
  })
);

export const deleteLikeFromPhoto = photoId => (
  $.ajax({
    method: 'DELETE',
    url: 'api/like',
    data: { photoId }
  })
);
