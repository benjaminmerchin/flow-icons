import React from 'react';
import SquaresOutline from './SquaresOutline';
import SquaresFilled from './SquaresFilled';

interface SquaresProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Squares({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquaresProps) {
  return filled ? (
    <SquaresFilled size={size} color={color} />
  ) : (
    <SquaresOutline size={size} color={color} />
  );
}

export default Squares;
