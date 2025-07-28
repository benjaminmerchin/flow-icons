import React from 'react';
import LinkOutline from './LinkOutline';
import LinkFilled from './LinkFilled';

interface LinkProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Link: React.FC<LinkProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <LinkFilled size={size} color={color} />
  ) : (
    <LinkOutline size={size} color={color} />
  );
};

export default Link;
