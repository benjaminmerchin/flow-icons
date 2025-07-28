import React from 'react';
import BookOutline from './BookOutline';
import BookFilled from './BookFilled';

interface BookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Book({ 
  size = 24,
  filled = false,
  ...props
}: BookProps) {
  return filled ? (
    <BookFilled size={size} {...props} />
  ) : (
    <BookOutline size={size} {...props} />
  );
}

export default Book;
