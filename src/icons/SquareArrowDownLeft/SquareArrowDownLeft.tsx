import React from 'react';
import SquareArrowDownLeftOutline from './SquareArrowDownLeftOutline';
import SquareArrowDownLeftFilled from './SquareArrowDownLeftFilled';

interface SquareArrowDownLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowDownLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareArrowDownLeftProps) {
  return filled ? (
    <SquareArrowDownLeftFilled size={size} color={color} />
  ) : (
    <SquareArrowDownLeftOutline size={size} color={color} />
  );
}

export default SquareArrowDownLeft;
