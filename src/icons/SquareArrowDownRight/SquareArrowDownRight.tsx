import React from 'react';
import SquareArrowDownRightOutline from './SquareArrowDownRightOutline';
import SquareArrowDownRightFilled from './SquareArrowDownRightFilled';

interface SquareArrowDownRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareArrowDownRight: React.FC<SquareArrowDownRightProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareArrowDownRightFilled size={size} color={color} />
  ) : (
    <SquareArrowDownRightOutline size={size} color={color} />
  );
};

export default SquareArrowDownRight;
