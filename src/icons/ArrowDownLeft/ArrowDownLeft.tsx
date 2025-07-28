import React from 'react';
import ArrowDownLeftOutline from './ArrowDownLeftOutline';
import ArrowDownLeftFilled from './ArrowDownLeftFilled';

interface ArrowDownLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowDownLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ArrowDownLeftProps) {
  return filled ? (
    <ArrowDownLeftFilled size={size} color={color} />
  ) : (
    <ArrowDownLeftOutline size={size} color={color} />
  );
}

export default ArrowDownLeft;
