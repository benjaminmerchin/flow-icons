import React from 'react';
import EarOffOutline from './EarOffOutline';
import EarOffFilled from './EarOffFilled';

interface EarOffProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function EarOff({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: EarOffProps) {
  return filled ? (
    <EarOffFilled size={size} color={color} />
  ) : (
    <EarOffOutline size={size} color={color} />
  );
}

export default EarOff;
