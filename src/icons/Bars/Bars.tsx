import React from 'react';
import BarsOutline from './BarsOutline';
import BarsFilled from './BarsFilled';

interface BarsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Bars({ 
  size = 24,
  filled = false,
  ...props
}: BarsProps) {
  return filled ? (
    <BarsFilled size={size} {...props} />
  ) : (
    <BarsOutline size={size} {...props} />
  );
}

export default Bars;
