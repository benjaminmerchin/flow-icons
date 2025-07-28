import React from 'react';
import ArrowLeftOutline from './ArrowLeftOutline';
import ArrowLeftFilled from './ArrowLeftFilled';

interface ArrowLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ArrowLeftFilled size={size} color={color} />
  ) : (
    <ArrowLeftOutline size={size} color={color} />
  );
};

export default ArrowLeft;
