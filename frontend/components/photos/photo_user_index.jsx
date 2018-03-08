import React from 'react';
import PhotoUserIndexItem from './photo_user_index_item';
import LoadingGraphic from '../loading-graphic';
import { Link } from 'react-router-dom';


class PhotoUserIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserPhotos(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.requestUserPhotos(newProps.match.params.userId);
    }
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
        <div className="user-index-photo-display">
          <h2 className="user-activity">Activity</h2>
          <div className="index-sub-display">
            {photos.map( photo =>
              <PhotoUserIndexItem key={photo.id} photo={photo} clearComments={this.props.clearComments}/>
            )}
          </div>
        </div>
      );
    }
  }
}

export default PhotoUserIndex;
