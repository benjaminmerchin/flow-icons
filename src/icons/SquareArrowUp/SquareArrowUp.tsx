import React from 'react';
import SquareArrowUpOutline from './SquareArrowUpOutline';
import SquareArrowUpFilled from './SquareArrowUpFilled';

interface SquareArrowUpProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowUp: React.FC<SquareArrowUpProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowUpFilled size={size} color={color} />
  ) : (
    <SquareArrowUpOutline size={size} color={color} />
  );
};

export default SquareArrowUp;
