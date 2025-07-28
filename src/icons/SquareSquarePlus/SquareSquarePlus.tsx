import React from 'react';
import SquareSquarePlusOutline from './SquareSquarePlusOutline';
import SquareSquarePlusFilled from './SquareSquarePlusFilled';

interface SquareSquarePlusProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SquareSquarePlus({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SquareSquarePlusProps) {
  return filled ? (
    <SquareSquarePlusFilled size={size} color={color} />
  ) : (
    <SquareSquarePlusOutline size={size} color={color} />
  );
}

export default SquareSquarePlus;
