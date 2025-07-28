import React from 'react';
import BookmarkOutline from './BookmarkOutline';
import BookmarkFilled from './BookmarkFilled';

interface BookmarkProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Bookmark: React.FC<BookmarkProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BookmarkFilled size={size} color={color} />
  ) : (
    <BookmarkOutline size={size} color={color} />
  );
};

export default Bookmark;
