import React from 'react';
import EyeOutline from './EyeOutline';
import EyeFilled from './EyeFilled';

interface EyeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Eye({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: EyeProps) {
  return filled ? (
    <EyeFilled size={size} color={color} />
  ) : (
    <EyeOutline size={size} color={color} />
  );
}

export default Eye;
