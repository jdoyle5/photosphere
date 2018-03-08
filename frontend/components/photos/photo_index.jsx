import React from 'react';
import PhotoIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';
import LoadingGraphic from '../loading-graphic';

class PhotoIndex extends React.Component {
  componentWillMount() {
    this.props.requestPhotos();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    const { photos, loading } = this.props;

    if (loading) {
      return (
        <LoadingGraphic />
      );
    } else {
      return (
        <div className="index-photo-display">
          <div className="tag-options">
            <Link to={`/tags/1/photos`}>Drone</Link>
            <Link to={`/tags/2/photos`}>Portrait</Link>
            <Link to={`/tags/3/photos`}>Landscape</Link>
          </div>
        <div className="index-sub-display">
            {photos.map( photo =>
              <PhotoIndexItem key={photo.id} photo={photo} clearComments={this.props.clearComments}/>
            )}
          </div>
        </div>
      );
    }
  }
}

export default PhotoIndex;
