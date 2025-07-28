import React from 'react';
import CrosshairOutline from './CrosshairOutline';
import CrosshairFilled from './CrosshairFilled';

interface CrosshairProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Crosshair: React.FC<CrosshairProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <CrosshairFilled size={size} color={color} />
  ) : (
    <CrosshairOutline size={size} color={color} />
  );
};

export default Crosshair;
