import React from 'react';
import SquareArrowInOutline from './SquareArrowInOutline';
import SquareArrowInFilled from './SquareArrowInFilled';

interface SquareArrowInProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareArrowIn({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: SquareArrowInProps) {
  return filled ? (
    <SquareArrowInFilled size={size} color={color} />
  ) : (
    <SquareArrowInOutline size={size} color={color} />
  );
}

export default SquareArrowIn;
