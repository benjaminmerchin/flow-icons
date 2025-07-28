import React from 'react';
import LineArrowRightOutline from './LineArrowRightOutline';
import LineArrowRightFilled from './LineArrowRightFilled';

interface LineArrowRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function LineArrowRight({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: LineArrowRightProps) {
  return filled ? (
    <LineArrowRightFilled size={size} color={color} />
  ) : (
    <LineArrowRightOutline size={size} color={color} />
  );
}

export default LineArrowRight;
