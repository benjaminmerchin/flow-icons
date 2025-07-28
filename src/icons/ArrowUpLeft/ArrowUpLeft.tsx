import React from 'react';
import ArrowUpLeftOutline from './ArrowUpLeftOutline';
import ArrowUpLeftFilled from './ArrowUpLeftFilled';

interface ArrowUpLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowUpLeft: React.FC<ArrowUpLeftProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowUpLeftFilled size={size} color={color} />
  ) : (
    <ArrowUpLeftOutline size={size} color={color} />
  );
};

export default ArrowUpLeft;
