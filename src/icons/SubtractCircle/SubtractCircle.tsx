import React from 'react';
import SubtractCircleOutline from './SubtractCircleOutline';
import SubtractCircleFilled from './SubtractCircleFilled';

interface SubtractCircleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SubtractCircle({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SubtractCircleProps) {
  return filled ? (
    <SubtractCircleFilled size={size} color={color} />
  ) : (
    <SubtractCircleOutline size={size} color={color} />
  );
}

export default SubtractCircle;
