import React from 'react';
import SubtractCircleOutline from './SubtractCircleOutline';
import SubtractCircleFilled from './SubtractCircleFilled';

interface SubtractCircleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SubtractCircle: React.FC<SubtractCircleProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SubtractCircleFilled size={size} color={color} />
  ) : (
    <SubtractCircleOutline size={size} color={color} />
  );
};

export default SubtractCircle;
