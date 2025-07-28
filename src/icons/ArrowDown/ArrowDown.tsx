import React from 'react';
import ArrowDownOutline from './ArrowDownOutline';
import ArrowDownFilled from './ArrowDownFilled';

interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowDown({ 
  size = 24,
  filled = false,
  ...props
}: ArrowDownProps) {
  return filled ? (
    <ArrowDownFilled size={size} {...props} />
  ) : (
    <ArrowDownOutline size={size} {...props} />
  );
}

export default ArrowDown;
