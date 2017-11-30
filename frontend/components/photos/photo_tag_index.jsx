import React from 'react';
import PhotoTagIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';

class PhotoTagIndex extends React.Component {
  componentWillMount() {
    this.props.requestTagPhotos(this.props.match.params.tagId);
  }

  componentWillReceiveProps(newProps) {
  if (this.props.match.params.tagId !== newProps.match.params.tagId) {
    this.props.requestTagPhotos(newProps.match.params.tagId);
  }
}

  render () {
    const { photos } = this.props;
    const tagId = this.props.match.params.tagId;

    return (
      <div className="index-photo-display">
        <div className="tag-options">
          <Link to={`/tags/1/photos`}>Drone</Link>
          <Link to={`/tags/2/photos`}>Portrait</Link>
          <Link to={`/tags/3/photos`}>Landscape</Link>
        </div>
        <div className="index-sub-display">
          {photos.map( photo =>
            <PhotoTagIndexItem key={photo.id} photo={photo}/>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoTagIndex;
