import React from 'react';
import ArrowBottomTopOutline from './ArrowBottomTopOutline';
import ArrowBottomTopFilled from './ArrowBottomTopFilled';

interface ArrowBottomTopProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowBottomTop({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowBottomTopProps) {
  return filled ? (
    <ArrowBottomTopFilled size={size} color={color} />
  ) : (
    <ArrowBottomTopOutline size={size} color={color} />
  );
}

export default ArrowBottomTop;
