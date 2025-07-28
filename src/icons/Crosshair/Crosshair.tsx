import React from 'react';
import CrosshairOutline from './CrosshairOutline';
import CrosshairFilled from './CrosshairFilled';

interface CrosshairProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Crosshair({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: CrosshairProps) {
  return filled ? (
    <CrosshairFilled size={size} color={color} />
  ) : (
    <CrosshairOutline size={size} color={color} />
  );
}

export default Crosshair;
