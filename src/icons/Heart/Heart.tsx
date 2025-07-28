import React from 'react';
import HeartOutline from './HeartOutline';
import HeartFilled from './HeartFilled';

interface HeartProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Heart({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: HeartProps) {
  return filled ? (
    <HeartFilled size={size} color={color} />
  ) : (
    <HeartOutline size={size} color={color} />
  );
}

export default Heart;
