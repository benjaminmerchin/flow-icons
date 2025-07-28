import React from 'react';
import EarOutline from './EarOutline';
import EarFilled from './EarFilled';

interface EarProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Ear: React.FC<EarProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <EarFilled size={size} color={color} />
  ) : (
    <EarOutline size={size} color={color} />
  );
};

export default Ear;
