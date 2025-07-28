import React from 'react';
import CakeOutline from './CakeOutline';
import CakeFilled from './CakeFilled';

interface CakeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Cake({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: CakeProps) {
  return filled ? (
    <CakeFilled size={size} color={color} />
  ) : (
    <CakeOutline size={size} color={color} />
  );
}

export default Cake;
