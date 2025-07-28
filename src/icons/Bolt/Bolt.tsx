import React from 'react';
import BoltOutline from './BoltOutline';
import BoltFilled from './BoltFilled';

interface BoltProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Bolt: React.FC<BoltProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BoltFilled size={size} color={color} />
  ) : (
    <BoltOutline size={size} color={color} />
  );
};

export default Bolt;
