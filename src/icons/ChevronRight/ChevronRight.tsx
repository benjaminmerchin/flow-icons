import React from 'react';
import ChevronRightOutline from './ChevronRightOutline';
import ChevronRightFilled from './ChevronRightFilled';

interface ChevronRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ChevronRight({ 
  size = 24,
  filled = false,
  ...props
}: ChevronRightProps) {
  return filled ? (
    <ChevronRightFilled size={size} {...props} />
  ) : (
    <ChevronRightOutline size={size} {...props} />
  );
}

export default ChevronRight;
