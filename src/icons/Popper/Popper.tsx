import React from 'react';
import PopperOutline from './PopperOutline';
import PopperFilled from './PopperFilled';

interface PopperProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Popper({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: PopperProps) {
  return filled ? (
    <PopperFilled size={size} color={color} />
  ) : (
    <PopperOutline size={size} color={color} />
  );
}

export default Popper;
