import React from 'react';

const PhotoShow = ({photo}) => {
  return (
    <div className="photo-show-div">
      <div className="photo-show">
        <img key={photo.id} src={ photo.img_url }/>
      </div>
    </div>
  );
};

export default PhotoShow;
