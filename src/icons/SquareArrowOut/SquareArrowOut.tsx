import React from 'react';
import SquareArrowOutOutline from './SquareArrowOutOutline';
import SquareArrowOutFilled from './SquareArrowOutFilled';

interface SquareArrowOutProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowOut: React.FC<SquareArrowOutProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowOutFilled size={size} color={color} />
  ) : (
    <SquareArrowOutOutline size={size} color={color} />
  );
};

export default SquareArrowOut;
