import React from 'react';
import SubtractSquareOutline from './SubtractSquareOutline';
import SubtractSquareFilled from './SubtractSquareFilled';

interface SubtractSquareProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SubtractSquare({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SubtractSquareProps) {
  return filled ? (
    <SubtractSquareFilled size={size} color={color} />
  ) : (
    <SubtractSquareOutline size={size} color={color} />
  );
}

export default SubtractSquare;
