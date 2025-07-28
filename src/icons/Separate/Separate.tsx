import React from 'react';
import SeparateOutline from './SeparateOutline';
import SeparateFilled from './SeparateFilled';

interface SeparateProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Separate({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: SeparateProps) {
  return filled ? (
    <SeparateFilled size={size} color={color} />
  ) : (
    <SeparateOutline size={size} color={color} />
  );
}

export default Separate;
