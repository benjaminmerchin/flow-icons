import React from 'react';
import ArrowLeftRightOutline from './ArrowLeftRightOutline';
import ArrowLeftRightFilled from './ArrowLeftRightFilled';

interface ArrowLeftRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowLeftRight({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ArrowLeftRightProps) {
  return filled ? (
    <ArrowLeftRightFilled size={size} color={color} />
  ) : (
    <ArrowLeftRightOutline size={size} color={color} />
  );
}

export default ArrowLeftRight;
