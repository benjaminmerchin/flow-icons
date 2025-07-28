import React from 'react';
import BellOutline from './BellOutline';
import BellFilled from './BellFilled';

interface BellProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Bell({ 
  size = 24,
  filled = false,
  ...props
}: BellProps) {
  return filled ? (
    <BellFilled size={size} {...props} />
  ) : (
    <BellOutline size={size} {...props} />
  );
}

export default Bell;
