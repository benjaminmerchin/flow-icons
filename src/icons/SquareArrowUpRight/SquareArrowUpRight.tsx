import React from 'react';
import SquareArrowUpRightOutline from './SquareArrowUpRightOutline';
import SquareArrowUpRightFilled from './SquareArrowUpRightFilled';

interface SquareArrowUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowUpRight({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowUpRightProps) {
  return filled ? (
    <SquareArrowUpRightFilled size={size} {...props} />
  ) : (
    <SquareArrowUpRightOutline size={size} {...props} />
  );
}

export default SquareArrowUpRight;
