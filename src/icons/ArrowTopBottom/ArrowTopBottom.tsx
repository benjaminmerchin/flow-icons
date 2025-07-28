import React from 'react';
import ArrowTopBottomOutline from './ArrowTopBottomOutline';
import ArrowTopBottomFilled from './ArrowTopBottomFilled';

interface ArrowTopBottomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowTopBottom({ 
  size = 24,
  filled = false,
  ...props
}: ArrowTopBottomProps) {
  return filled ? (
    <ArrowTopBottomFilled size={size} {...props} />
  ) : (
    <ArrowTopBottomOutline size={size} {...props} />
  );
}

export default ArrowTopBottom;
