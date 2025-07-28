import React from 'react';
import BoltOutline from './BoltOutline';
import BoltFilled from './BoltFilled';

interface BoltProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Bolt({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: BoltProps) {
  return filled ? (
    <BoltFilled size={size} color={color} />
  ) : (
    <BoltOutline size={size} color={color} />
  );
}

export default Bolt;
