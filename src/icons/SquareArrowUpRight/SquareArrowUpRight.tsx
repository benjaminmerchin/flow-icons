import React from 'react';
import SquareArrowUpRightOutline from './SquareArrowUpRightOutline';
import SquareArrowUpRightFilled from './SquareArrowUpRightFilled';

interface SquareArrowUpRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowUpRight: React.FC<SquareArrowUpRightProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowUpRightFilled size={size} color={color} />
  ) : (
    <SquareArrowUpRightOutline size={size} color={color} />
  );
};

export default SquareArrowUpRight;
