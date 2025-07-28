import React from 'react';
import XOutline from './XOutline';
import XFilled from './XFilled';

interface XProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const X: React.FC<XProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <XFilled size={size} color={color} />
  ) : (
    <XOutline size={size} color={color} />
  );
};

export default X;
