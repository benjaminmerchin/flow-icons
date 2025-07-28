import React from 'react';
import SquareArrowInOutline from './SquareArrowInOutline';
import SquareArrowInFilled from './SquareArrowInFilled';

interface SquareArrowInProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowIn({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowInProps) {
  return filled ? (
    <SquareArrowInFilled size={size} {...props} />
  ) : (
    <SquareArrowInOutline size={size} {...props} />
  );
}

export default SquareArrowIn;
