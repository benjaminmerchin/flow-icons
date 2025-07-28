import React from 'react';
import EarOutline from './EarOutline';
import EarFilled from './EarFilled';

interface EarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Ear({ 
  size = 24,
  filled = false,
  ...props
}: EarProps) {
  return filled ? (
    <EarFilled size={size} {...props} />
  ) : (
    <EarOutline size={size} {...props} />
  );
}

export default Ear;
