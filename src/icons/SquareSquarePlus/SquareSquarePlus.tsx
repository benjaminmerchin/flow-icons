import React from 'react';
import SquareSquarePlusOutline from './SquareSquarePlusOutline';
import SquareSquarePlusFilled from './SquareSquarePlusFilled';

interface SquareSquarePlusProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SquareSquarePlus: React.FC<SquareSquarePlusProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SquareSquarePlusFilled size={size} color={color} />
  ) : (
    <SquareSquarePlusOutline size={size} color={color} />
  );
};

export default SquareSquarePlus;
