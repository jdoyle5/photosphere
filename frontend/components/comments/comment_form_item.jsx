import React from 'react';
import { Link } from 'react-router-dom';

// export const CommentFormItem = ({ comment }) => {
//   return (
//     <div className="comments-section">
//       <div className="comment-owner-body">
//         <Link to={`/users/${comment.owner_id}/photos`}>
//           { comment.username }
//         </Link>
//         <p> { comment.body } </p>
//       </div>
//       <span>{ comment.created } ago</span>
//     </div>
//   );
// };

  class CommentFormItem extends React.Component {
    constructor(props) {
      super(props);

      this.deleteComment = this.deleteComment.bind(this);
      this.deleteCommentButton = this.deleteCommentButton.bind(this);
    }

    deleteComment(event){
      const { comment, deleteComment } = this.props;
      event.preventDefault();
      deleteComment(comment.id);
    }

    deleteCommentButton(){
      const { currentUser, comment } = this.props;
      const deleteButton = <button className="delete-comment">
      <i className="fa fa-times"
      onClick={this.deleteComment}
      aria-hidden="true"></i></button>;
      if (currentUser.id === comment.owner_id){
        return deleteButton;
      }
    }

    render() {
      const { comment } = this.props;

      return (
        <div className="comments-section">
          <div className="comment-owner-body">
            <Link to={`/users/${comment.owner_id}/photos`}>
              { comment.username }
            </Link>
            <div className="comment-body-and-delete">
              <p>{ comment.body }</p>
              <span>{ this.deleteCommentButton() }</span>
            </div>
          </div>
          <span>{ comment.created } ago</span>
        </div>
      );
    }

}

export default CommentFormItem;
