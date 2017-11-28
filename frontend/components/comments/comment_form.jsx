import React from 'react';
import { CommentFormItem } from './comment_form_item';

class CommentForm extends React.Component {
componentWillMount() {
  this.props.requestComments(this.props.photo.id);
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

  render () {
    const { currentUser, photo, likePhoto, unlikePhoto } = this.props;
    let likeButtonText = <i class="fa fa-heart-o" aria-hidden="true"></i>;
    let likeButtonAction = () => likePhoto(photo.id);
    if (photo.liked_by_current_user) {
      likeButtonText = <i class="fa fa-heart" aria-hidden="true"></i>;
      likeButtonAction = () => unlikePhoto(photo.id);
    }

    return(
      <div className="comment-like">
        <h3> {photo.title} </h3>
        <p className="num-likes">Likes: {photo.likes}</p>
        <button className="like-button" onClick={likeButtonAction}>{likeButtonText}</button>
        <div className="comment-form-container">
          {/* <form className="comment-form" onSubmit={this.handleSubmit}> */}

          <div className="comment-form">
            { this.renderComments() }
            <div className="comment-div">
              <textarea type="text"
                value={this.state.body}
                onChange={this.handleInput('body')}
                placeholder="Add Comment"
              />
              {/* <input type="submit" value="Add Comment" /> */}
              <button onClick={this.handleSubmit}>Add Comment</button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default CommentForm;
