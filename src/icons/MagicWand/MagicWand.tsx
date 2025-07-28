import React from 'react';
import MagicWandOutline from './MagicWandOutline';
import MagicWandFilled from './MagicWandFilled';

interface MagicWandProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const MagicWand: React.FC<MagicWandProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <MagicWandFilled size={size} color={color} />
  ) : (
    <MagicWandOutline size={size} color={color} />
  );
};

export default MagicWand;
