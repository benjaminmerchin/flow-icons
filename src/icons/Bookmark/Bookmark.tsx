import React from 'react';
import BookmarkOutline from './BookmarkOutline';
import BookmarkFilled from './BookmarkFilled';

interface BookmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Bookmark({ 
  size = 24,
  filled = false,
  ...props
}: BookmarkProps) {
  return filled ? (
    <BookmarkFilled size={size} {...props} />
  ) : (
    <BookmarkOutline size={size} {...props} />
  );
}

export default Bookmark;
