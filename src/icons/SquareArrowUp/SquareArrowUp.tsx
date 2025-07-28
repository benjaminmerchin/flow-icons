import React from 'react';
import SquareArrowUpOutline from './SquareArrowUpOutline';
import SquareArrowUpFilled from './SquareArrowUpFilled';

interface SquareArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowUp({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowUpProps) {
  return filled ? (
    <SquareArrowUpFilled size={size} {...props} />
  ) : (
    <SquareArrowUpOutline size={size} {...props} />
  );
}

export default SquareArrowUp;
