import React from 'react';
import EuroOutline from './EuroOutline';
import EuroFilled from './EuroFilled';

interface EuroProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Euro: React.FC<EuroProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <EuroFilled size={size} color={color} />
  ) : (
    <EuroOutline size={size} color={color} />
  );
};

export default Euro;
