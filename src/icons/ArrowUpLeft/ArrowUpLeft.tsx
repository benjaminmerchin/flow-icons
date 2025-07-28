import React from 'react';
import ArrowUpLeftOutline from './ArrowUpLeftOutline';
import ArrowUpLeftFilled from './ArrowUpLeftFilled';

interface ArrowUpLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowUpLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ArrowUpLeftProps) {
  return filled ? (
    <ArrowUpLeftFilled size={size} color={color} />
  ) : (
    <ArrowUpLeftOutline size={size} color={color} />
  );
}

export default ArrowUpLeft;
