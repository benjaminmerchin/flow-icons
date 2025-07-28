import React from 'react';
import StarOutline from './StarOutline';
import StarFilled from './StarFilled';

interface StarProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Star({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: StarProps) {
  return filled ? (
    <StarFilled size={size} color={color} />
  ) : (
    <StarOutline size={size} color={color} />
  );
}

export default Star;
