import React from 'react';
import LinkOutline from './LinkOutline';
import LinkFilled from './LinkFilled';

interface LinkProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Link({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: LinkProps) {
  return filled ? (
    <LinkFilled size={size} color={color} />
  ) : (
    <LinkOutline size={size} color={color} />
  );
}

export default Link;
