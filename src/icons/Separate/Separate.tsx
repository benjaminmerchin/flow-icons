import React from 'react';
import SeparateOutline from './SeparateOutline';
import SeparateFilled from './SeparateFilled';

interface SeparateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Separate({ 
  size = 24,
  filled = false,
  ...props
}: SeparateProps) {
  return filled ? (
    <SeparateFilled size={size} {...props} />
  ) : (
    <SeparateOutline size={size} {...props} />
  );
}

export default Separate;
