import React from 'react';
import HandOutline from './HandOutline';
import HandFilled from './HandFilled';

interface HandProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Hand({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: HandProps) {
  return filled ? (
    <HandFilled size={size} color={color} />
  ) : (
    <HandOutline size={size} color={color} />
  );
}

export default Hand;
