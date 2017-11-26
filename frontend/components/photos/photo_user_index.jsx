import React from 'react';
import PhotoUserIndexItem from './photo_index_item';

class PhotoUserIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserPhotos(this.props.match.params.userId);
  }

  render () {
    const { photos } = this.props;

    return (
      <div className="homepage">
        <h2>All Activity</h2>
        <div className="photos-home-index">
          {photos.map( photo =>
            <PhotoUserIndexItem key={photo.id} photo={photo}/>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoUserIndexItem;
