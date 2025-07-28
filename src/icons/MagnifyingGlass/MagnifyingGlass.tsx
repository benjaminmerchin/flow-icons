import React from 'react';
import MagnifyingGlassOutline from './MagnifyingGlassOutline';
import MagnifyingGlassFilled from './MagnifyingGlassFilled';

interface MagnifyingGlassProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function MagnifyingGlass({ 
  size = 24,
  filled = false,
  ...props
}: MagnifyingGlassProps) {
  return filled ? (
    <MagnifyingGlassFilled size={size} {...props} />
  ) : (
    <MagnifyingGlassOutline size={size} {...props} />
  );
}

export default MagnifyingGlass;
