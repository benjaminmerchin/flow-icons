import React from 'react';
import XOutline from './XOutline';
import XFilled from './XFilled';

interface XProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function X({ 
  size = 24,
  filled = false,
  ...props
}: XProps) {
  return filled ? (
    <XFilled size={size} {...props} />
  ) : (
    <XOutline size={size} {...props} />
  );
}

export default X;
