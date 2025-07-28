import React from 'react';
import MinusOutline from './MinusOutline';
import MinusFilled from './MinusFilled';

interface MinusProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Minus: React.FC<MinusProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <MinusFilled size={size} color={color} />
  ) : (
    <MinusOutline size={size} color={color} />
  );
};

export default Minus;
