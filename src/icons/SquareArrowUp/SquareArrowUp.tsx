import React from 'react';
import SquareArrowUpOutline from './SquareArrowUpOutline';
import SquareArrowUpFilled from './SquareArrowUpFilled';

interface SquareArrowUpProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowUp({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareArrowUpProps) {
  return filled ? (
    <SquareArrowUpFilled size={size} color={color} />
  ) : (
    <SquareArrowUpOutline size={size} color={color} />
  );
}

export default SquareArrowUp;
