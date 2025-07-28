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
  color = "#1A1A1A",
  filled = false 
}: ArrowUpLeftProps) {
  return filled ? (
    <ArrowUpLeftFilled size={size} color={color} />
  ) : (
    <ArrowUpLeftOutline size={size} color={color} />
  );
}

export default ArrowUpLeft;
