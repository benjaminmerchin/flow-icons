import React from 'react';
import ArrowLineLeftOutline from './ArrowLineLeftOutline';
import ArrowLineLeftFilled from './ArrowLineLeftFilled';

interface ArrowLineLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowLineLeft({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowLineLeftProps) {
  return filled ? (
    <ArrowLineLeftFilled size={size} color={color} />
  ) : (
    <ArrowLineLeftOutline size={size} color={color} />
  );
}

export default ArrowLineLeft;
