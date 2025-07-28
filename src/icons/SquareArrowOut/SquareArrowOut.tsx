import React from 'react';
import SquareArrowOutOutline from './SquareArrowOutOutline';
import SquareArrowOutFilled from './SquareArrowOutFilled';

interface SquareArrowOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowOut({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowOutProps) {
  return filled ? (
    <SquareArrowOutFilled size={size} {...props} />
  ) : (
    <SquareArrowOutOutline size={size} {...props} />
  );
}

export default SquareArrowOut;
