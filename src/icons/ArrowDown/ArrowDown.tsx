import React from 'react';
import ArrowDownOutline from './ArrowDownOutline';
import ArrowDownFilled from './ArrowDownFilled';

interface ArrowDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowDownFilled size={size} color={color} />
  ) : (
    <ArrowDownOutline size={size} color={color} />
  );
};

export default ArrowDown;
