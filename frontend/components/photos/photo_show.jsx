import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';

const PhotoShow = ({photo}) => {
  return (
    <div className="photo-comment-div">
      <div className="photo-show-div">
          <img key={photo.id} src={ photo.img_url }/>
      </div>
      <CommentFormContainer photo={photo}/>
    </div>
  );
};

export default PhotoShow;
