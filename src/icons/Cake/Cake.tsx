import React from 'react';
import CakeOutline from './CakeOutline';
import CakeFilled from './CakeFilled';

interface CakeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Cake: React.FC<CakeProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <CakeFilled size={size} color={color} />
  ) : (
    <CakeOutline size={size} color={color} />
  );
};

export default Cake;
