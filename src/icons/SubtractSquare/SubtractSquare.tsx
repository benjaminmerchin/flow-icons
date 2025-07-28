import React from 'react';
import SubtractSquareOutline from './SubtractSquareOutline';
import SubtractSquareFilled from './SubtractSquareFilled';

interface SubtractSquareProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SubtractSquare({ 
  size = 24,
  filled = false,
  ...props
}: SubtractSquareProps) {
  return filled ? (
    <SubtractSquareFilled size={size} {...props} />
  ) : (
    <SubtractSquareOutline size={size} {...props} />
  );
}

export default SubtractSquare;
