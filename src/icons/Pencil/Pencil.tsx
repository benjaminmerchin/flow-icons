import React from 'react';
import PencilOutline from './PencilOutline';
import PencilFilled from './PencilFilled';

interface PencilProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Pencil({ 
  size = 24,
  filled = false,
  ...props
}: PencilProps) {
  return filled ? (
    <PencilFilled size={size} {...props} />
  ) : (
    <PencilOutline size={size} {...props} />
  );
}

export default Pencil;
