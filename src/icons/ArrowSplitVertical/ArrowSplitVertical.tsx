import React from 'react';
import ArrowSplitVerticalOutline from './ArrowSplitVerticalOutline';
import ArrowSplitVerticalFilled from './ArrowSplitVerticalFilled';

interface ArrowSplitVerticalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowSplitVertical({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowSplitVerticalProps) {
  return filled ? (
    <ArrowSplitVerticalFilled size={size} color={color} />
  ) : (
    <ArrowSplitVerticalOutline size={size} color={color} />
  );
}

export default ArrowSplitVertical;
