import React from 'react';
import CommentFormContainer from '../comments/comment_form_container';

class PhotoShow extends React.Component {

  componentWillMount() {
    this.props.requestComments(this.props.photo.id);
    this.props.requestTags(this.props.photo.id);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-comment-div">
        <div className="photo-show-div">
            <img key={this.props.photo.id} src={ this.props.photo.img_url }/>
        </div>
        <CommentFormContainer photo={this.props.photo} modalClose={this.props.modalClose}/>
      </div>
    );
  }
}

export default PhotoShow;
