import React from 'react';
import CircleArrowUpRightOutline from './CircleArrowUpRightOutline';
import CircleArrowUpRightFilled from './CircleArrowUpRightFilled';

interface CircleArrowUpRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function CircleArrowUpRight({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: CircleArrowUpRightProps) {
  return filled ? (
    <CircleArrowUpRightFilled size={size} color={color} />
  ) : (
    <CircleArrowUpRightOutline size={size} color={color} />
  );
}

export default CircleArrowUpRight;
