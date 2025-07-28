import React from 'react';
import BrushOutline from './BrushOutline';
import BrushFilled from './BrushFilled';

interface BrushProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Brush: React.FC<BrushProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BrushFilled size={size} color={color} />
  ) : (
    <BrushOutline size={size} color={color} />
  );
};

export default Brush;
