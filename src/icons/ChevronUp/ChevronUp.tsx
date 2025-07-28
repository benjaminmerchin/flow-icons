import React from 'react';
import ChevronUpOutline from './ChevronUpOutline';
import ChevronUpFilled from './ChevronUpFilled';

interface ChevronUpProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ChevronUp: React.FC<ChevronUpProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ChevronUpFilled size={size} color={color} />
  ) : (
    <ChevronUpOutline size={size} color={color} />
  );
};

export default ChevronUp;
