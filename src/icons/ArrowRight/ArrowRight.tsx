import React from 'react';
import ArrowRightOutline from './ArrowRightOutline';
import ArrowRightFilled from './ArrowRightFilled';

interface ArrowRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowRightFilled size={size} color={color} />
  ) : (
    <ArrowRightOutline size={size} color={color} />
  );
};

export default ArrowRight;
