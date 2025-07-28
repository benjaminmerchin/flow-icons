import React from 'react';
import PencilOutline from './PencilOutline';
import PencilFilled from './PencilFilled';

interface PencilProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Pencil({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: PencilProps) {
  return filled ? (
    <PencilFilled size={size} color={color} />
  ) : (
    <PencilOutline size={size} color={color} />
  );
}

export default Pencil;
