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
  color = "#1A1A1A",
  filled = false 
}: HeartProps) {
  return filled ? (
    <HeartFilled size={size} color={color} />
  ) : (
    <HeartOutline size={size} color={color} />
  );
}

export default Heart;
