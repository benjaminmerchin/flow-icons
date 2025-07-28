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
  color = "#1A1A1A",
  filled = false 
}: MinusProps) {
  return filled ? (
    <MinusFilled size={size} color={color} />
  ) : (
    <MinusOutline size={size} color={color} />
  );
}

export default Minus;
