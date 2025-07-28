import React from 'react';
import ArrowDownOutline from './ArrowDownOutline';
import ArrowDownFilled from './ArrowDownFilled';

interface ArrowDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowDown({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowDownProps) {
  return filled ? (
    <ArrowDownFilled size={size} color={color} />
  ) : (
    <ArrowDownOutline size={size} color={color} />
  );
}

export default ArrowDown;
