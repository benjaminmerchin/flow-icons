import React from 'react';
import ChevronLeftOutline from './ChevronLeftOutline';
import ChevronLeftFilled from './ChevronLeftFilled';

interface ChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ChevronLeft({ 
  size = 24,
  filled = false,
  ...props
}: ChevronLeftProps) {
  return filled ? (
    <ChevronLeftFilled size={size} {...props} />
  ) : (
    <ChevronLeftOutline size={size} {...props} />
  );
}

export default ChevronLeft;
