import React from 'react';
import ArrowLeftOutline from './ArrowLeftOutline';
import ArrowLeftFilled from './ArrowLeftFilled';

interface ArrowLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowLeft({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowLeftProps) {
  return filled ? (
    <ArrowLeftFilled size={size} color={color} />
  ) : (
    <ArrowLeftOutline size={size} color={color} />
  );
}

export default ArrowLeft;
