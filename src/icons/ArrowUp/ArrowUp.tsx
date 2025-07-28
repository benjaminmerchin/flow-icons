import React from 'react';
import ArrowUpOutline from './ArrowUpOutline';
import ArrowUpFilled from './ArrowUpFilled';

interface ArrowUpProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowUp({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowUpProps) {
  return filled ? (
    <ArrowUpFilled size={size} color={color} />
  ) : (
    <ArrowUpOutline size={size} color={color} />
  );
}

export default ArrowUp;
