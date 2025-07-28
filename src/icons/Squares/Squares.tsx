import React from 'react';
import SquaresOutline from './SquaresOutline';
import SquaresFilled from './SquaresFilled';

interface SquaresProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Squares: React.FC<SquaresProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquaresFilled size={size} color={color} />
  ) : (
    <SquaresOutline size={size} color={color} />
  );
};

export default Squares;
