import React from 'react';

const PhotoShow = ({photo}) => {
  return (
    <div className="photo-show-div">
      <div className="photo-show">
          <img key={photo.id} src={ photo.img_url }/>
      </div>

      {/* <div className="session-form-container">
        <form className="form">
          <input type="text"
            className="login-input"
            placeholder="comment"
          />
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div> */}
    </div>
  );
};

export default PhotoShow;
