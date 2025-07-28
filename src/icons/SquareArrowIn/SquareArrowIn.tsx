import React from 'react';
import SquareArrowInOutline from './SquareArrowInOutline';
import SquareArrowInFilled from './SquareArrowInFilled';

interface SquareArrowInProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowIn: React.FC<SquareArrowInProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowInFilled size={size} color={color} />
  ) : (
    <SquareArrowInOutline size={size} color={color} />
  );
};

export default SquareArrowIn;
