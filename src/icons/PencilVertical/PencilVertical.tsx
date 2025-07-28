import React from 'react';
import PencilVerticalOutline from './PencilVerticalOutline';
import PencilVerticalFilled from './PencilVerticalFilled';

interface PencilVerticalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function PencilVertical({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: PencilVerticalProps) {
  return filled ? (
    <PencilVerticalFilled size={size} color={color} />
  ) : (
    <PencilVerticalOutline size={size} color={color} />
  );
}

export default PencilVertical;
