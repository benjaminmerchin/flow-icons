import React from 'react';
import PinOutline from './PinOutline';
import PinFilled from './PinFilled';

interface PinProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Pin: React.FC<PinProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <PinFilled size={size} color={color} />
  ) : (
    <PinOutline size={size} color={color} />
  );
};

export default Pin;
