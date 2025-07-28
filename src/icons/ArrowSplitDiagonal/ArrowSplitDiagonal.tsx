import React from 'react';
import ArrowSplitDiagonalOutline from './ArrowSplitDiagonalOutline';
import ArrowSplitDiagonalFilled from './ArrowSplitDiagonalFilled';

interface ArrowSplitDiagonalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowSplitDiagonal: React.FC<ArrowSplitDiagonalProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowSplitDiagonalFilled size={size} color={color} />
  ) : (
    <ArrowSplitDiagonalOutline size={size} color={color} />
  );
};

export default ArrowSplitDiagonal;
