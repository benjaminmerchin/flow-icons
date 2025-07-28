import React from 'react';
import ArrowLineLeftOutline from './ArrowLineLeftOutline';
import ArrowLineLeftFilled from './ArrowLineLeftFilled';

interface ArrowLineLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowLineLeft({ 
  size = 24,
  filled = false,
  ...props
}: ArrowLineLeftProps) {
  return filled ? (
    <ArrowLineLeftFilled size={size} {...props} />
  ) : (
    <ArrowLineLeftOutline size={size} {...props} />
  );
}

export default ArrowLineLeft;
