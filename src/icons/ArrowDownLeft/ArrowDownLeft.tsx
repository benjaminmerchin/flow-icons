import React from 'react';
import ArrowDownLeftOutline from './ArrowDownLeftOutline';
import ArrowDownLeftFilled from './ArrowDownLeftFilled';

interface ArrowDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowDownLeft({ 
  size = 24,
  filled = false,
  ...props
}: ArrowDownLeftProps) {
  return filled ? (
    <ArrowDownLeftFilled size={size} {...props} />
  ) : (
    <ArrowDownLeftOutline size={size} {...props} />
  );
}

export default ArrowDownLeft;
