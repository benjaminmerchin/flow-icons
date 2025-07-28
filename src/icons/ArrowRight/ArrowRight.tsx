import React from 'react';
import ArrowRightOutline from './ArrowRightOutline';
import ArrowRightFilled from './ArrowRightFilled';

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowRight({ 
  size = 24,
  filled = false,
  ...props
}: ArrowRightProps) {
  return filled ? (
    <ArrowRightFilled size={size} {...props} />
  ) : (
    <ArrowRightOutline size={size} {...props} />
  );
}

export default ArrowRight;
