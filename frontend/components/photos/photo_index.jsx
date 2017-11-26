import React from 'react';
import Modal from 'react-modal';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoIndexItem from './photo_index_item';
import { Link, withRouter } from 'react-router-dom';

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

export default withRouter(PhotoIndex);
