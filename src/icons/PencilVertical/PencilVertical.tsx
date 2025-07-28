import React from 'react';
import PencilVerticalOutline from './PencilVerticalOutline';
import PencilVerticalFilled from './PencilVerticalFilled';

interface PencilVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function PencilVertical({ 
  size = 24,
  filled = false,
  ...props
}: PencilVerticalProps) {
  return filled ? (
    <PencilVerticalFilled size={size} {...props} />
  ) : (
    <PencilVerticalOutline size={size} {...props} />
  );
}

export default PencilVertical;
