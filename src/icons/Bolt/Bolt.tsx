import React from 'react';
import BoltOutline from './BoltOutline';
import BoltFilled from './BoltFilled';

interface BoltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Bolt({ 
  size = 24,
  filled = false,
  ...props
}: BoltProps) {
  return filled ? (
    <BoltFilled size={size} {...props} />
  ) : (
    <BoltOutline size={size} {...props} />
  );
}

export default Bolt;
