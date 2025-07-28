import React from 'react';
import SquaresOutline from './SquaresOutline';
import SquaresFilled from './SquaresFilled';

interface SquaresProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Squares({ 
  size = 24,
  filled = false,
  ...props
}: SquaresProps) {
  return filled ? (
    <SquaresFilled size={size} {...props} />
  ) : (
    <SquaresOutline size={size} {...props} />
  );
}

export default Squares;
