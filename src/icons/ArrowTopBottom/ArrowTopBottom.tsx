import React from 'react';
import ArrowTopBottomOutline from './ArrowTopBottomOutline';
import ArrowTopBottomFilled from './ArrowTopBottomFilled';

interface ArrowTopBottomProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function ArrowTopBottom({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ArrowTopBottomProps) {
  return filled ? (
    <ArrowTopBottomFilled size={size} color={color} />
  ) : (
    <ArrowTopBottomOutline size={size} color={color} />
  );
}

export default ArrowTopBottom;
