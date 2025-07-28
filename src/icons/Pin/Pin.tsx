import React from 'react';
import PinOutline from './PinOutline';
import PinFilled from './PinFilled';

interface PinProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Pin({ 
  size = 24,
  filled = false,
  ...props
}: PinProps) {
  return filled ? (
    <PinFilled size={size} {...props} />
  ) : (
    <PinOutline size={size} {...props} />
  );
}

export default Pin;
