import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentWillMount() {
    this.props.requestPhotos();
  }

  render () {
    const { photos } = this.props;

    return (
      <div className="homepage">
        <h2>All Activity</h2>
        <div className="photos-home-index">
          {photos.map( photo =>
            <PhotoIndexItem key={photo.id} photo={photo}/>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoIndex;
