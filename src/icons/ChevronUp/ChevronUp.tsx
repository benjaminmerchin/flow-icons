import React from 'react';
import ChevronUpOutline from './ChevronUpOutline';
import ChevronUpFilled from './ChevronUpFilled';

interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ChevronUp({ 
  size = 24,
  filled = false,
  ...props
}: ChevronUpProps) {
  return filled ? (
    <ChevronUpFilled size={size} {...props} />
  ) : (
    <ChevronUpOutline size={size} {...props} />
  );
}

export default ChevronUp;
