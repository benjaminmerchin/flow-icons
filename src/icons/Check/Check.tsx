import React from 'react';
import CheckOutline from './CheckOutline';
import CheckFilled from './CheckFilled';

interface CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Check({ 
  size = 24,
  filled = false,
  ...props
}: CheckProps) {
  return filled ? (
    <CheckFilled size={size} {...props} />
  ) : (
    <CheckOutline size={size} {...props} />
  );
}

export default Check;
