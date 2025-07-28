import React from 'react';
import ChevronLeftOutline from './ChevronLeftOutline';
import ChevronLeftFilled from './ChevronLeftFilled';

interface ChevronLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ChevronLeft: React.FC<ChevronLeftProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ChevronLeftFilled size={size} color={color} />
  ) : (
    <ChevronLeftOutline size={size} color={color} />
  );
};

export default ChevronLeft;
