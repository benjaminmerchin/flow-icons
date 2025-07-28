import React from 'react';
import BellOutline from './BellOutline';
import BellFilled from './BellFilled';

interface BellProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Bell: React.FC<BellProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BellFilled size={size} color={color} />
  ) : (
    <BellOutline size={size} color={color} />
  );
};

export default Bell;
