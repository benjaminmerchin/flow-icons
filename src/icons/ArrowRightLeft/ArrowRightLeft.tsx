import React from 'react';
import ArrowRightLeftOutline from './ArrowRightLeftOutline';
import ArrowRightLeftFilled from './ArrowRightLeftFilled';

interface ArrowRightLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowRightLeft: React.FC<ArrowRightLeftProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowRightLeftFilled size={size} color={color} />
  ) : (
    <ArrowRightLeftOutline size={size} color={color} />
  );
};

export default ArrowRightLeft;
