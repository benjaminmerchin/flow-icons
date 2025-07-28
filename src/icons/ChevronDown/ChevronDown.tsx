import React from 'react';
import ChevronDownOutline from './ChevronDownOutline';
import ChevronDownFilled from './ChevronDownFilled';

interface ChevronDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ChevronDown: React.FC<ChevronDownProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ChevronDownFilled size={size} color={color} />
  ) : (
    <ChevronDownOutline size={size} color={color} />
  );
};

export default ChevronDown;
