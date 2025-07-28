import React from 'react';
import ArrowSplitVerticalOutline from './ArrowSplitVerticalOutline';
import ArrowSplitVerticalFilled from './ArrowSplitVerticalFilled';

interface ArrowSplitVerticalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowSplitVertical: React.FC<ArrowSplitVerticalProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowSplitVerticalFilled size={size} color={color} />
  ) : (
    <ArrowSplitVerticalOutline size={size} color={color} />
  );
};

export default ArrowSplitVertical;
