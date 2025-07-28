import React from 'react';
import UmbrellaOutline from './UmbrellaOutline';
import UmbrellaFilled from './UmbrellaFilled';

interface UmbrellaProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Umbrella({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: UmbrellaProps) {
  return filled ? (
    <UmbrellaFilled size={size} color={color} />
  ) : (
    <UmbrellaOutline size={size} color={color} />
  );
}

export default Umbrella;
