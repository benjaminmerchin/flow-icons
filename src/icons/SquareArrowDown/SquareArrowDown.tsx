import React from 'react';
import SquareArrowDownOutline from './SquareArrowDownOutline';
import SquareArrowDownFilled from './SquareArrowDownFilled';

interface SquareArrowDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowDown({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareArrowDownProps) {
  return filled ? (
    <SquareArrowDownFilled size={size} color={color} />
  ) : (
    <SquareArrowDownOutline size={size} color={color} />
  );
}

export default SquareArrowDown;
