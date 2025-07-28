import React from 'react';
import SquareArrowDownOutline from './SquareArrowDownOutline';
import SquareArrowDownFilled from './SquareArrowDownFilled';

interface SquareArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowDown({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowDownProps) {
  return filled ? (
    <SquareArrowDownFilled size={size} {...props} />
  ) : (
    <SquareArrowDownOutline size={size} {...props} />
  );
}

export default SquareArrowDown;
