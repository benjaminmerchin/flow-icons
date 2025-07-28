import React from 'react';
import SquareArrowOutOutline from './SquareArrowOutOutline';
import SquareArrowOutFilled from './SquareArrowOutFilled';

interface SquareArrowOutProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowOut({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareArrowOutProps) {
  return filled ? (
    <SquareArrowOutFilled size={size} color={color} />
  ) : (
    <SquareArrowOutOutline size={size} color={color} />
  );
}

export default SquareArrowOut;
