import React from 'react';
import BookOutline from './BookOutline';
import BookFilled from './BookFilled';

interface BookProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Book({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: BookProps) {
  return filled ? (
    <BookFilled size={size} color={color} />
  ) : (
    <BookOutline size={size} color={color} />
  );
}

export default Book;
