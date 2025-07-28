import React from 'react';
import LineArrowLeftOutline from './LineArrowLeftOutline';
import LineArrowLeftFilled from './LineArrowLeftFilled';

interface LineArrowLeftProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const LineArrowLeft: React.FC<LineArrowLeftProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <LineArrowLeftFilled size={size} color={color} />
  ) : (
    <LineArrowLeftOutline size={size} color={color} />
  );
};

export default LineArrowLeft;
