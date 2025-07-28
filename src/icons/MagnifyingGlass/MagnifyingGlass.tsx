import React from 'react';
import MagnifyingGlassOutline from './MagnifyingGlassOutline';
import MagnifyingGlassFilled from './MagnifyingGlassFilled';

interface MagnifyingGlassProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <MagnifyingGlassFilled size={size} color={color} />
  ) : (
    <MagnifyingGlassOutline size={size} color={color} />
  );
};

export default MagnifyingGlass;
