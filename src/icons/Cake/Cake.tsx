import React from 'react';
import CakeOutline from './CakeOutline';
import CakeFilled from './CakeFilled';

interface CakeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Cake({ 
  size = 24,
  filled = false,
  ...props
}: CakeProps) {
  return filled ? (
    <CakeFilled size={size} {...props} />
  ) : (
    <CakeOutline size={size} {...props} />
  );
}

export default Cake;
