import React from 'react';
import SquareArrowDownRightOutline from './SquareArrowDownRightOutline';
import SquareArrowDownRightFilled from './SquareArrowDownRightFilled';

interface SquareArrowDownRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowDownRight({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareArrowDownRightProps) {
  return filled ? (
    <SquareArrowDownRightFilled size={size} color={color} />
  ) : (
    <SquareArrowDownRightOutline size={size} color={color} />
  );
}

export default SquareArrowDownRight;
