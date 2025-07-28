import React from 'react';
import HeartOutline from './HeartOutline';
import HeartFilled from './HeartFilled';

interface HeartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Heart({ 
  size = 24,
  filled = false,
  ...props
}: HeartProps) {
  return filled ? (
    <HeartFilled size={size} {...props} />
  ) : (
    <HeartOutline size={size} {...props} />
  );
}

export default Heart;
