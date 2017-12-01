import React from 'react';
import { Link } from 'react-router-dom';

export const TagItem = ({ tag, modalClose }) => {
  return (
    <div className="tag-item">
        <Link onClick={modalClose} to={`/tags/${tag.id}/photos`}>{tag.name}</Link>
    </div>
  );
};
