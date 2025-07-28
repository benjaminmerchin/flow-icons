import React from 'react';
import EarOutline from './EarOutline';
import EarFilled from './EarFilled';

interface EarProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Ear({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: EarProps) {
  return filled ? (
    <EarFilled size={size} color={color} />
  ) : (
    <EarOutline size={size} color={color} />
  );
}

export default Ear;
