import React from 'react';
import PhotoTagIndexItem from './photo_index_item';
import { Link } from 'react-router-dom';

class PhotoTagIndex extends React.Component {
  constructor() {
    super();
    this.state = {categorie1: "no-underline",
                  categorie2: "no-underline",
                  categorie3: "no-underline"};
    this.addClassName = this.addClassName.bind(this);
  }

  addClassName() {
      // this.setState = ({categorie: "underline"});
      // console.log(this.state.categorie);
      if (this.props.match.params.tagId === "1") {
        this.setState({categorie1: "underline",
                          categorie2: "no-underline",
                          categorie3: "no-underline"});
      } else if (this.props.match.params.tagId === "2") {
        this.setState({categorie1: "no-underline",
                          categorie2: "underline",
                          categorie3: "no-underline"});
      } else if (this.props.match.params.tagId === "3") {
        this.setState({categorie1: "no-underline",
                          categorie2: "no-underline",
                          categorie3: "underline"});
      }
      console.log(this.state);
      console.log(this.props.match.params.tagId);
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
    const tagId = this.props.match.params.tagId;

    return (
      <div className="index-photo-display">
        <div className="tag-options">
          <Link className={this.state.categorie1}
            onClick={this.addClassName}
            to={`/tags/1/photos`}>Drone
          </Link>
          <Link className={this.state.categorie2}
            onClick={this.addClassName}
            to={`/tags/2/photos`}>Portrait
          </Link>
          <Link className={this.state.categorie3}
            onClick={this.addClassName}
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
