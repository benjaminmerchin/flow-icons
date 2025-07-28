import React from 'react';
import HandOutline from './HandOutline';
import HandFilled from './HandFilled';

interface HandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Hand({ 
  size = 24,
  filled = false,
  ...props
}: HandProps) {
  return filled ? (
    <HandFilled size={size} {...props} />
  ) : (
    <HandOutline size={size} {...props} />
  );
}

export default Hand;
