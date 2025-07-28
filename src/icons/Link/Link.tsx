import React from 'react';
import LinkOutline from './LinkOutline';
import LinkFilled from './LinkFilled';

interface LinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Link({ 
  size = 24,
  filled = false,
  ...props
}: LinkProps) {
  return filled ? (
    <LinkFilled size={size} {...props} />
  ) : (
    <LinkOutline size={size} {...props} />
  );
}

export default Link;
