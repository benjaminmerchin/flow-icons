import React from 'react';
import ChevronUpDownOutline from './ChevronUpDownOutline';
import ChevronUpDownFilled from './ChevronUpDownFilled';

interface ChevronUpDownProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ChevronUpDown: React.FC<ChevronUpDownProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ChevronUpDownFilled size={size} color={color} />
  ) : (
    <ChevronUpDownOutline size={size} color={color} />
  );
};

export default ChevronUpDown;
