import React from 'react';
import PopperOutline from './PopperOutline';
import PopperFilled from './PopperFilled';

interface PopperProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Popper({ 
  size = 24,
  filled = false,
  ...props
}: PopperProps) {
  return filled ? (
    <PopperFilled size={size} {...props} />
  ) : (
    <PopperOutline size={size} {...props} />
  );
}

export default Popper;
