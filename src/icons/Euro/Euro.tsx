import React from 'react';
import EuroOutline from './EuroOutline';
import EuroFilled from './EuroFilled';

interface EuroProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Euro({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: EuroProps) {
  return filled ? (
    <EuroFilled size={size} color={color} />
  ) : (
    <EuroOutline size={size} color={color} />
  );
}

export default Euro;
