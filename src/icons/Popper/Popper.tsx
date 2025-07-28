import React from 'react';
import PopperOutline from './PopperOutline';
import PopperFilled from './PopperFilled';

interface PopperProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Popper: React.FC<PopperProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <PopperFilled size={size} color={color} />
  ) : (
    <PopperOutline size={size} color={color} />
  );
};

export default Popper;
