import React from 'react';
import DotsSixVerticalOutline from './DotsSixVerticalOutline';
import DotsSixVerticalFilled from './DotsSixVerticalFilled';

interface DotsSixVerticalProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const DotsSixVertical: React.FC<DotsSixVerticalProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <DotsSixVerticalFilled size={size} color={color} />
  ) : (
    <DotsSixVerticalOutline size={size} color={color} />
  );
};

export default DotsSixVertical;
