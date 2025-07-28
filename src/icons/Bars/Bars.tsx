import React from 'react';
import BarsOutline from './BarsOutline';
import BarsFilled from './BarsFilled';

interface BarsProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Bars({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: BarsProps) {
  return filled ? (
    <BarsFilled size={size} color={color} />
  ) : (
    <BarsOutline size={size} color={color} />
  );
}

export default Bars;
