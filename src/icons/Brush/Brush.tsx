import React from 'react';
import BrushOutline from './BrushOutline';
import BrushFilled from './BrushFilled';

interface BrushProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Brush({ 
  size = 24,
  filled = false,
  ...props
}: BrushProps) {
  return filled ? (
    <BrushFilled size={size} {...props} />
  ) : (
    <BrushOutline size={size} {...props} />
  );
}

export default Brush;
