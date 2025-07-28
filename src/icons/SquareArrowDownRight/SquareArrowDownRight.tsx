import React from 'react';
import SquareArrowDownRightOutline from './SquareArrowDownRightOutline';
import SquareArrowDownRightFilled from './SquareArrowDownRightFilled';

interface SquareArrowDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareArrowDownRight({ 
  size = 24,
  filled = false,
  ...props
}: SquareArrowDownRightProps) {
  return filled ? (
    <SquareArrowDownRightFilled size={size} {...props} />
  ) : (
    <SquareArrowDownRightOutline size={size} {...props} />
  );
}

export default SquareArrowDownRight;
