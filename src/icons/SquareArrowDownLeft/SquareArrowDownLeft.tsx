import React from 'react';
import SquareArrowDownLeftOutline from './SquareArrowDownLeftOutline';
import SquareArrowDownLeftFilled from './SquareArrowDownLeftFilled';

interface SquareArrowDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowDownLeft({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowDownLeftProps) {
  return filled ? (
    <SquareArrowDownLeftFilled size={size} {...props} />
  ) : (
    <SquareArrowDownLeftOutline size={size} {...props} />
  );
}

export default SquareArrowDownLeft;
