import React from 'react';
import ChevronUpDownOutline from './ChevronUpDownOutline';
import ChevronUpDownFilled from './ChevronUpDownFilled';

interface ChevronUpDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ChevronUpDown({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: ChevronUpDownProps) {
  return filled ? (
    <ChevronUpDownFilled size={size} color={color} />
  ) : (
    <ChevronUpDownOutline size={size} color={color} />
  );
}

export default ChevronUpDown;
