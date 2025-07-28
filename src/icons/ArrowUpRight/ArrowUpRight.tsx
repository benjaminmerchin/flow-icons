import React from 'react';
import ArrowUpRightOutline from './ArrowUpRightOutline';
import ArrowUpRightFilled from './ArrowUpRightFilled';

interface ArrowUpRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowUpRight({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowUpRightProps) {
  return filled ? (
    <ArrowUpRightFilled size={size} color={color} />
  ) : (
    <ArrowUpRightOutline size={size} color={color} />
  );
}

export default ArrowUpRight;
