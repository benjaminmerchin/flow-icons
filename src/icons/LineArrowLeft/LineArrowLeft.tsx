import React from 'react';
import LineArrowLeftOutline from './LineArrowLeftOutline';
import LineArrowLeftFilled from './LineArrowLeftFilled';

interface LineArrowLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function LineArrowLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: LineArrowLeftProps) {
  return filled ? (
    <LineArrowLeftFilled size={size} color={color} />
  ) : (
    <LineArrowLeftOutline size={size} color={color} />
  );
}

export default LineArrowLeft;
