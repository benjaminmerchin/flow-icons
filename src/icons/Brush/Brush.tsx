import React from 'react';
import BrushOutline from './BrushOutline';
import BrushFilled from './BrushFilled';

interface BrushProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Brush({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: BrushProps) {
  return filled ? (
    <BrushFilled size={size} color={color} />
  ) : (
    <BrushOutline size={size} color={color} />
  );
}

export default Brush;
