import React from 'react';
import ArrowUpRightOutline from './ArrowUpRightOutline';
import ArrowUpRightFilled from './ArrowUpRightFilled';

interface ArrowUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowUpRight({ 
  size = 24,
  filled = false,
  ...props
}: ArrowUpRightProps) {
  return filled ? (
    <ArrowUpRightFilled size={size} {...props} />
  ) : (
    <ArrowUpRightOutline size={size} {...props} />
  );
}

export default ArrowUpRight;
