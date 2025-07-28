import React from 'react';
import MinusOutline from './MinusOutline';
import MinusFilled from './MinusFilled';

interface MinusProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Minus({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: MinusProps) {
  return filled ? (
    <MinusFilled size={size} color={color} />
  ) : (
    <MinusOutline size={size} color={color} />
  );
}

export default Minus;
