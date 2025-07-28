import React from 'react';
import MagnifyingGlassOutline from './MagnifyingGlassOutline';
import MagnifyingGlassFilled from './MagnifyingGlassFilled';

interface MagnifyingGlassProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function MagnifyingGlass({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: MagnifyingGlassProps) {
  return filled ? (
    <MagnifyingGlassFilled size={size} color={color} />
  ) : (
    <MagnifyingGlassOutline size={size} color={color} />
  );
}

export default MagnifyingGlass;
