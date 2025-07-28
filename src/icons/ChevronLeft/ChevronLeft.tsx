import React from 'react';
import ChevronLeftOutline from './ChevronLeftOutline';
import ChevronLeftFilled from './ChevronLeftFilled';

interface ChevronLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ChevronLeft({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ChevronLeftProps) {
  return filled ? (
    <ChevronLeftFilled size={size} color={color} />
  ) : (
    <ChevronLeftOutline size={size} color={color} />
  );
}

export default ChevronLeft;
