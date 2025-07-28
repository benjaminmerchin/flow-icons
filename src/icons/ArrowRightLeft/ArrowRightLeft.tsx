import React from 'react';
import ArrowRightLeftOutline from './ArrowRightLeftOutline';
import ArrowRightLeftFilled from './ArrowRightLeftFilled';

interface ArrowRightLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowRightLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ArrowRightLeftProps) {
  return filled ? (
    <ArrowRightLeftFilled size={size} color={color} />
  ) : (
    <ArrowRightLeftOutline size={size} color={color} />
  );
}

export default ArrowRightLeft;
