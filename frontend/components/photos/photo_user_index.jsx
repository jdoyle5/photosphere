import React from 'react';
import PhotoUserIndexItem from './photo_user_index_item';

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
    const { photos } = this.props;

    return (
      <div className="index-photo-display">
        <h2 className="user-activity">User Activity</h2>
        <div className="index-sub-display">
          {photos.map( photo =>
            <PhotoUserIndexItem key={photo.id} photo={photo}/>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoUserIndex;
