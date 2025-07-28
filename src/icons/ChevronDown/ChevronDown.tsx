import React from 'react';
import ChevronDownOutline from './ChevronDownOutline';
import ChevronDownFilled from './ChevronDownFilled';

interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ChevronDown({ 
  size = 24,
  filled = false,
  ...props
}: ChevronDownProps) {
  return filled ? (
    <ChevronDownFilled size={size} {...props} />
  ) : (
    <ChevronDownOutline size={size} {...props} />
  );
}

export default ChevronDown;
