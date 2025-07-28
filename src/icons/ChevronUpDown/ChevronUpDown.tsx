import React from 'react';
import ChevronUpDownOutline from './ChevronUpDownOutline';
import ChevronUpDownFilled from './ChevronUpDownFilled';

interface ChevronUpDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ChevronUpDown({ 
  size = 24,
  filled = false,
  ...props
}: ChevronUpDownProps) {
  return filled ? (
    <ChevronUpDownFilled size={size} {...props} />
  ) : (
    <ChevronUpDownOutline size={size} {...props} />
  );
}

export default ChevronUpDown;
