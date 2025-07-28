import React from 'react';
import BarsOutline from './BarsOutline';
import BarsFilled from './BarsFilled';

interface BarsProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Bars: React.FC<BarsProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BarsFilled size={size} color={color} />
  ) : (
    <BarsOutline size={size} color={color} />
  );
};

export default Bars;
