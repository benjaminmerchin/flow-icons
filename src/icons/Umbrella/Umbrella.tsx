import React from 'react';
import UmbrellaOutline from './UmbrellaOutline';
import UmbrellaFilled from './UmbrellaFilled';

interface UmbrellaProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Umbrella: React.FC<UmbrellaProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <UmbrellaFilled size={size} color={color} />
  ) : (
    <UmbrellaOutline size={size} color={color} />
  );
};

export default Umbrella;
