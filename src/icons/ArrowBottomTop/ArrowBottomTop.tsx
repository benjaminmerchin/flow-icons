import React from 'react';
import ArrowBottomTopOutline from './ArrowBottomTopOutline';
import ArrowBottomTopFilled from './ArrowBottomTopFilled';

interface ArrowBottomTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowBottomTop({ 
  size = 24,
  filled = false,
  ...props
}: ArrowBottomTopProps) {
  return filled ? (
    <ArrowBottomTopFilled size={size} {...props} />
  ) : (
    <ArrowBottomTopOutline size={size} {...props} />
  );
}

export default ArrowBottomTop;
