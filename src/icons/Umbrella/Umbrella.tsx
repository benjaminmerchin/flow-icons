import React from 'react';
import UmbrellaOutline from './UmbrellaOutline';
import UmbrellaFilled from './UmbrellaFilled';

interface UmbrellaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Umbrella({ 
  size = 24,
  filled = false,
  ...props
}: UmbrellaProps) {
  return filled ? (
    <UmbrellaFilled size={size} {...props} />
  ) : (
    <UmbrellaOutline size={size} {...props} />
  );
}

export default Umbrella;
