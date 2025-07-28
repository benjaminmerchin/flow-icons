import React from 'react';
import ArrowDownRightOutline from './ArrowDownRightOutline';
import ArrowDownRightFilled from './ArrowDownRightFilled';

interface ArrowDownRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowDownRight({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowDownRightProps) {
  return filled ? (
    <ArrowDownRightFilled size={size} color={color} />
  ) : (
    <ArrowDownRightOutline size={size} color={color} />
  );
}

export default ArrowDownRight;
