import React from 'react';
import BookmarkOutline from './BookmarkOutline';
import BookmarkFilled from './BookmarkFilled';

interface BookmarkProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Bookmark({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: BookmarkProps) {
  return filled ? (
    <BookmarkFilled size={size} color={color} />
  ) : (
    <BookmarkOutline size={size} color={color} />
  );
}

export default Bookmark;
