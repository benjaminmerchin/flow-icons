import React from 'react';
import ArrowSplitHorizontalOutline from './ArrowSplitHorizontalOutline';
import ArrowSplitHorizontalFilled from './ArrowSplitHorizontalFilled';

interface ArrowSplitHorizontalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowSplitHorizontal({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowSplitHorizontalProps) {
  return filled ? (
    <ArrowSplitHorizontalFilled size={size} color={color} />
  ) : (
    <ArrowSplitHorizontalOutline size={size} color={color} />
  );
}

export default ArrowSplitHorizontal;
