import React from 'react';
import CrosshairOutline from './CrosshairOutline';
import CrosshairFilled from './CrosshairFilled';

interface CrosshairProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Crosshair({ 
  size = 24,
  filled = false,
  ...props
}: CrosshairProps) {
  return filled ? (
    <CrosshairFilled size={size} {...props} />
  ) : (
    <CrosshairOutline size={size} {...props} />
  );
}

export default Crosshair;
