import React from 'react';
import MinusOutline from './MinusOutline';
import MinusFilled from './MinusFilled';

interface MinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Minus({ 
  size = 24,
  filled = false,
  ...props
}: MinusProps) {
  return filled ? (
    <MinusFilled size={size} {...props} />
  ) : (
    <MinusOutline size={size} {...props} />
  );
}

export default Minus;
