import React from 'react';
import CheckOutline from './CheckOutline';
import CheckFilled from './CheckFilled';

interface CheckProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Check({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: CheckProps) {
  return filled ? (
    <CheckFilled size={size} color={color} />
  ) : (
    <CheckOutline size={size} color={color} />
  );
}

export default Check;
