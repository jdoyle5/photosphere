import React from 'react';
import { Link } from 'react-router-dom';

export const CommentFormItem = ({ comment }) => {
  return (
    <div>
      <div>
        <Link to={`users/${comment.owner_id}/photos`}>
          { comment.username }
        </Link>
        <span>{ comment.created }</span>
      </div>
      <p> { comment.body } Hello </p>

  </div>
  );
};
