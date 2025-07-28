import React from 'react';
import EarOffOutline from './EarOffOutline';
import EarOffFilled from './EarOffFilled';

interface EarOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function EarOff({ 
  size = 24,
  filled = false,
  ...props
}: EarOffProps) {
  return filled ? (
    <EarOffFilled size={size} {...props} />
  ) : (
    <EarOffOutline size={size} {...props} />
  );
}

export default EarOff;
