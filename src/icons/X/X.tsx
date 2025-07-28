import React from 'react';
import XOutline from './XOutline';
import XFilled from './XFilled';

interface XProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function X({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: XProps) {
  return filled ? (
    <XFilled size={size} color={color} />
  ) : (
    <XOutline size={size} color={color} />
  );
}

export default X;
