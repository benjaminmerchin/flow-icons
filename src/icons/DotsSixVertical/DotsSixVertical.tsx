import React from 'react';
import DotsSixVerticalOutline from './DotsSixVerticalOutline';
import DotsSixVerticalFilled from './DotsSixVerticalFilled';

interface DotsSixVerticalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function DotsSixVertical({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: DotsSixVerticalProps) {
  return filled ? (
    <DotsSixVerticalFilled size={size} color={color} />
  ) : (
    <DotsSixVerticalOutline size={size} color={color} />
  );
}

export default DotsSixVertical;
