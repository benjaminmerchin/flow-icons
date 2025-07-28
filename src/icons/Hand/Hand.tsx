import React from 'react';
import HandOutline from './HandOutline';
import HandFilled from './HandFilled';

interface HandProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Hand: React.FC<HandProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <HandFilled size={size} color={color} />
  ) : (
    <HandOutline size={size} color={color} />
  );
};

export default Hand;
