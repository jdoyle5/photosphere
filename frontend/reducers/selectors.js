import values from 'lodash/values';

export const selectPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((pho1, pho2) => (
    new Date(pho2.created_at) - new Date(pho1.created_at)
  ));
};

export const selectComments = state => {
  let comments = values(state.entities.comments);
  return comments.sort((com1, com2) => (
    new Date(com2.created_at) - new Date(com1.created_at)
  ));
};
