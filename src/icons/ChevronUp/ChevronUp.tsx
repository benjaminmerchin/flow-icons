import React from 'react';
import ChevronUpOutline from './ChevronUpOutline';
import ChevronUpFilled from './ChevronUpFilled';

interface ChevronUpProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ChevronUp({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ChevronUpProps) {
  return filled ? (
    <ChevronUpFilled size={size} color={color} />
  ) : (
    <ChevronUpOutline size={size} color={color} />
  );
}

export default ChevronUp;
