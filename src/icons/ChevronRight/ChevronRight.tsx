import React from 'react';
import ChevronRightOutline from './ChevronRightOutline';
import ChevronRightFilled from './ChevronRightFilled';

interface ChevronRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const ChevronRight: React.FC<ChevronRightProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ChevronRightFilled size={size} color={color} />
  ) : (
    <ChevronRightOutline size={size} color={color} />
  );
};

export default ChevronRight;
