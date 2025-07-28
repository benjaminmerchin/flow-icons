import React from 'react';
import EyeOutline from './EyeOutline';
import EyeFilled from './EyeFilled';

interface EyeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Eye({ 
  size = 24,
  filled = false,
  ...props
}: EyeProps) {
  return filled ? (
    <EyeFilled size={size} {...props} />
  ) : (
    <EyeOutline size={size} {...props} />
  );
}

export default Eye;
