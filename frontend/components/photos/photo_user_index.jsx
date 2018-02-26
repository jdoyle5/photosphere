import React from 'react';
import PhotoUserIndexItem from './photo_user_index_item';
import LoadingGraphic from '../loading-graphic';
import { Link } from 'react-router-dom';


class PhotoUserIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserPhotos(this.props.match.params.userId);
    console.log("mounted");
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
    setTimeout(function(){ console.log(photos); }, 1000);
    if (loading) {
      return (
        <LoadingGraphic />
      );
    } else {
      return (
        <div className="index-photo-display">
          {/* <div className="navbar-user">
            <div className="navbar-photo-activity">
              <Link to={`/users/${photos[0].owner_id}/photos`}><img src={ photos[0].user_photo }/></Link>
            </div>
            <div className="navbar-username">
              <Link to={`/users/${photos[0].owner_id}/photos`} className="link-username-activity">{photos[0].username}</Link>
            </div>
          </div> */}
          <h2 className="user-activity">Activity</h2>
          <div className="index-sub-display">
            {photos.map( photo =>
              <PhotoUserIndexItem key={photo.id} photo={photo}/>
            )}
          </div>
        </div>
      );
    }
  }
}

export default PhotoUserIndex;
