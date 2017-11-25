import values from 'lodash/values';

export const selectAllPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((pho1, pho2) => (
    new Date(pho2.created) - new Date(pho1.created)
  ));
};
