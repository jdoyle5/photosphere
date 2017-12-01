import React from 'react';
import { CommentFormItem } from './comment_form_item';
import { TagItem } from '../tag/tag_item';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
componentWillMount() {
  this.props.requestComments(this.props.photo.id);
  this.props.requestTags(this.props.photo.id);
}

  constructor(props) {
    super(props);
    this.state = {
      body: "",
      owner_id: this.props.currentUser,
      photo_id: this.props.photo.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const formComment = this.state;
    if(this.state.body) {
      this.props.postComment(formComment).then(this.setState({body: ""}));
    }
  }

  renderComments() {
    const { photo, comments } = this.props;
    return (
      <div className="comments-scroll">
        <ul>
          {comments.map (comment => (
            <CommentFormItem key={comment.id} comment={comment} photo={photo} />
          ))}
        </ul>
      </div>
    );
  }

  renderTags() {
    const { tags } = this.props;
    return (
      <div className="tag-div">
          {tags.map (tag => (
            <TagItem key={tag.id} tag={tag} modalClose={this.props.modalClose}/>
          ))}
      </div>
    );
  }

  render () {
    const { currentUser, photo, likePhoto, unlikePhoto } = this.props;
    let likeButtonText = <i className="fa fa-heart-o" aria-hidden="true"></i>;
    let likeButtonAction = () => likePhoto(photo.id);
    if (photo.liked_by_current_user) {
      likeButtonText = <i className="fa fa-heart" aria-hidden="true"></i>;
      likeButtonAction = () => unlikePhoto(photo.id);
    }

    return(
      <div className="comment-like">
        <h2 className="h2-comment"> {photo.title} </h2>
        <h3>by:
          <Link to={`/users/${photo.owner_id}/photos`}
            className="comment-username">{photo.username}
          </Link>
        </h3>
        <button className="like-button" onClick={likeButtonAction}>{likeButtonText}</button>
        <p className="num-likes">{photo.likes} likes</p>
        <div className="comment-form-container">
          <form onSubmit={this.handleSubmit} className="comment-form">
            {this.renderComments()}
            <div className="comment-div">
              <input type="text"
                value={this.state.body}
                onChange={this.handleInput('body')}
                placeholder="Add a comment..."
              />
              <br/>
            {this.renderTags()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
