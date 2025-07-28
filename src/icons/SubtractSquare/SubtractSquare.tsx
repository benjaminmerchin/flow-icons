import React from 'react';
import SubtractSquareOutline from './SubtractSquareOutline';
import SubtractSquareFilled from './SubtractSquareFilled';

interface SubtractSquareProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SubtractSquare: React.FC<SubtractSquareProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SubtractSquareFilled size={size} color={color} />
  ) : (
    <SubtractSquareOutline size={size} color={color} />
  );
};

export default SubtractSquare;
