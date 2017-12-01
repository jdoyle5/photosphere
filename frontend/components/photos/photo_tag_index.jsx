import React from 'react';
import PhotoTagIndexItem from './photo_tag_index_item';
import { Link } from 'react-router-dom';

class PhotoTagIndex extends React.Component {

  // This functiono will take in the tagId that I pass in down in the
  // render function (either 1, 2, or 3) and compare it to the tagId in
  // the current url.
  underline (tagId) {
    return (tagId === this.props.match.params.tagId) ?
      "underline" : "no-underline";
  }

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

    return (
      <div className="index-photo-display">
        <div className="tag-options">
          <Link className={this.underline("1")}
            to={`/tags/1/photos`}>Drone
          </Link>
          <Link className={this.underline("2")}
            to={`/tags/2/photos`}>Portrait
          </Link>
          <Link className={this.underline("3")}
            to={`/tags/3/photos`}>Landscape
          </Link>
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
