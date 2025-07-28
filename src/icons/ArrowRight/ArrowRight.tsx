import React from 'react';
import ArrowRightOutline from './ArrowRightOutline';
import ArrowRightFilled from './ArrowRightFilled';

interface ArrowRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowRight({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowRightProps) {
  return filled ? (
    <ArrowRightFilled size={size} color={color} />
  ) : (
    <ArrowRightOutline size={size} color={color} />
  );
}

export default ArrowRight;
