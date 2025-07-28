import React from 'react';
import ArrowLeftRightOutline from './ArrowLeftRightOutline';
import ArrowLeftRightFilled from './ArrowLeftRightFilled';

interface ArrowLeftRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowLeftRight({ 
  size = 24,
  filled = false,
  ...props
}: ArrowLeftRightProps) {
  return filled ? (
    <ArrowLeftRightFilled size={size} {...props} />
  ) : (
    <ArrowLeftRightOutline size={size} {...props} />
  );
}

export default ArrowLeftRight;
