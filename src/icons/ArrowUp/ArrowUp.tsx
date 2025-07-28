import React from 'react';
import ArrowUpOutline from './ArrowUpOutline';
import ArrowUpFilled from './ArrowUpFilled';

interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowUp({ 
  size = 24,
  filled = false,
  ...props
}: ArrowUpProps) {
  return filled ? (
    <ArrowUpFilled size={size} {...props} />
  ) : (
    <ArrowUpOutline size={size} {...props} />
  );
}

export default ArrowUp;
