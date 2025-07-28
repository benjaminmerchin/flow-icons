import React from 'react';
import EuroOutline from './EuroOutline';
import EuroFilled from './EuroFilled';

interface EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Euro({ 
  size = 24,
  filled = false,
  ...props
}: EuroProps) {
  return filled ? (
    <EuroFilled size={size} {...props} />
  ) : (
    <EuroOutline size={size} {...props} />
  );
}

export default Euro;
