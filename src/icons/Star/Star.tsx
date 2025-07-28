import React from 'react';
import StarOutline from './StarOutline';
import StarFilled from './StarFilled';

interface StarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Star({ 
  size = 24,
  filled = false,
  ...props
}: StarProps) {
  return filled ? (
    <StarFilled size={size} {...props} />
  ) : (
    <StarOutline size={size} {...props} />
  );
}

export default Star;
