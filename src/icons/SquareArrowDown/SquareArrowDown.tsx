import React from 'react';
import SquareArrowDownOutline from './SquareArrowDownOutline';
import SquareArrowDownFilled from './SquareArrowDownFilled';

interface SquareArrowDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowDown: React.FC<SquareArrowDownProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowDownFilled size={size} color={color} />
  ) : (
    <SquareArrowDownOutline size={size} color={color} />
  );
};

export default SquareArrowDown;
