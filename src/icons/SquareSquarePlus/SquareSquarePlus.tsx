import React from 'react';
import SquareSquarePlusOutline from './SquareSquarePlusOutline';
import SquareSquarePlusFilled from './SquareSquarePlusFilled';

interface SquareSquarePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SquareSquarePlus({ 
  size = 24,
  filled = false,
  ...props
}: SquareSquarePlusProps) {
  return filled ? (
    <SquareSquarePlusFilled size={size} {...props} />
  ) : (
    <SquareSquarePlusOutline size={size} {...props} />
  );
}

export default SquareSquarePlus;
