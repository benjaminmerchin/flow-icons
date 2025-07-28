import React from 'react';
import ArrowUpLeftOutline from './ArrowUpLeftOutline';
import ArrowUpLeftFilled from './ArrowUpLeftFilled';

interface ArrowUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowUpLeft({ 
  size = 24,
  filled = false,
  ...props
}: ArrowUpLeftProps) {
  return filled ? (
    <ArrowUpLeftFilled size={size} {...props} />
  ) : (
    <ArrowUpLeftOutline size={size} {...props} />
  );
}

export default ArrowUpLeft;
