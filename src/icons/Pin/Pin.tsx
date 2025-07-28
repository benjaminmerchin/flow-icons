import React from 'react';
import PinOutline from './PinOutline';
import PinFilled from './PinFilled';

interface PinProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Pin({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: PinProps) {
  return filled ? (
    <PinFilled size={size} color={color} />
  ) : (
    <PinOutline size={size} color={color} />
  );
}

export default Pin;
