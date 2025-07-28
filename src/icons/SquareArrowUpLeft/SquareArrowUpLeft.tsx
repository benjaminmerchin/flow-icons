import React from 'react';
import SquareArrowUpLeftOutline from './SquareArrowUpLeftOutline';
import SquareArrowUpLeftFilled from './SquareArrowUpLeftFilled';

interface SquareArrowUpLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowUpLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareArrowUpLeftProps) {
  return filled ? (
    <SquareArrowUpLeftFilled size={size} color={color} />
  ) : (
    <SquareArrowUpLeftOutline size={size} color={color} />
  );
}

export default SquareArrowUpLeft;
