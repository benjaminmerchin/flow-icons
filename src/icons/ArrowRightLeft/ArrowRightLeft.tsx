import React from 'react';
import ArrowRightLeftOutline from './ArrowRightLeftOutline';
import ArrowRightLeftFilled from './ArrowRightLeftFilled';

interface ArrowRightLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowRightLeft({ 
  size = 24,
  filled = false,
  ...props
}: ArrowRightLeftProps) {
  return filled ? (
    <ArrowRightLeftFilled size={size} {...props} />
  ) : (
    <ArrowRightLeftOutline size={size} {...props} />
  );
}

export default ArrowRightLeft;
