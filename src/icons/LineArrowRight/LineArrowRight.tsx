import React from 'react';
import LineArrowRightOutline from './LineArrowRightOutline';
import LineArrowRightFilled from './LineArrowRightFilled';

interface LineArrowRightProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const LineArrowRight: React.FC<LineArrowRightProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <LineArrowRightFilled size={size} color={color} />
  ) : (
    <LineArrowRightOutline size={size} color={color} />
  );
};

export default LineArrowRight;
