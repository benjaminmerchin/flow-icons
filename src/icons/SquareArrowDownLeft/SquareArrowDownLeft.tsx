import React from 'react';
import SquareArrowDownLeftOutline from './SquareArrowDownLeftOutline';
import SquareArrowDownLeftFilled from './SquareArrowDownLeftFilled';

interface SquareArrowDownLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowDownLeft: React.FC<SquareArrowDownLeftProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowDownLeftFilled size={size} color={color} />
  ) : (
    <SquareArrowDownLeftOutline size={size} color={color} />
  );
};

export default SquareArrowDownLeft;
