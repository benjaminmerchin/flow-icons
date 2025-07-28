import React from 'react';
import BellOutline from './BellOutline';
import BellFilled from './BellFilled';

interface BellProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Bell({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: BellProps) {
  return filled ? (
    <BellFilled size={size} color={color} />
  ) : (
    <BellOutline size={size} color={color} />
  );
}

export default Bell;
