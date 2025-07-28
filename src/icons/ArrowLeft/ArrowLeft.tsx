import React from 'react';
import ArrowLeftOutline from './ArrowLeftOutline';
import ArrowLeftFilled from './ArrowLeftFilled';

interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowLeft({ 
  size = 24,
  filled = false,
  ...props
}: ArrowLeftProps) {
  return filled ? (
    <ArrowLeftFilled size={size} {...props} />
  ) : (
    <ArrowLeftOutline size={size} {...props} />
  );
}

export default ArrowLeft;
