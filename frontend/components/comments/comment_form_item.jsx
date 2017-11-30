import React from 'react';
import { Link } from 'react-router-dom';

export const CommentFormItem = ({ comment }) => {
  return (
    <div className="comments-section">
      <div className="comment-owner-body">
        <Link to={`/users/${comment.owner_id}/photos`}>
          { comment.username }
        </Link>
        <p> { comment.body } </p>
      </div>
      <span>{ comment.created } ago</span>
    </div>
  );
};
