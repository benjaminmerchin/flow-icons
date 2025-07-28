import React from 'react';
import ArrowLineRightOutline from './ArrowLineRightOutline';
import ArrowLineRightFilled from './ArrowLineRightFilled';

interface ArrowLineRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowLineRight: React.FC<ArrowLineRightProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowLineRightFilled size={size} color={color} />
  ) : (
    <ArrowLineRightOutline size={size} color={color} />
  );
};

export default ArrowLineRight;
