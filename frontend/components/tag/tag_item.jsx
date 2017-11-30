import React from 'react';
import { Link } from 'react-router-dom';

export const TagItem = ({ tag }) => {
  return (
    <div className="tag-item">
        <Link to={`/tags/${tag.id}/photos`}>{tag.name}</Link>
    </div>
  );
};
