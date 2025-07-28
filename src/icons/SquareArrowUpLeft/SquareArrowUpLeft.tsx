import React from 'react';
import SquareArrowUpLeftOutline from './SquareArrowUpLeftOutline';
import SquareArrowUpLeftFilled from './SquareArrowUpLeftFilled';

interface SquareArrowUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowUpLeft({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowUpLeftProps) {
  return filled ? (
    <SquareArrowUpLeftFilled size={size} {...props} />
  ) : (
    <SquareArrowUpLeftOutline size={size} {...props} />
  );
}

export default SquareArrowUpLeft;
