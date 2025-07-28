import React from 'react';
import BookOutline from './BookOutline';
import BookFilled from './BookFilled';

interface BookProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Book: React.FC<BookProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BookFilled size={size} color={color} />
  ) : (
    <BookOutline size={size} color={color} />
  );
};

export default Book;
