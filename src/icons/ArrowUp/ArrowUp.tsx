import React from 'react';
import ArrowUpOutline from './ArrowUpOutline';
import ArrowUpFilled from './ArrowUpFilled';

interface ArrowUpProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowUp: React.FC<ArrowUpProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowUpFilled size={size} color={color} />
  ) : (
    <ArrowUpOutline size={size} color={color} />
  );
};

export default ArrowUp;
