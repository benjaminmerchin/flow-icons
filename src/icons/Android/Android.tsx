import React from 'react';
import AndroidOutline from './AndroidOutline';
import AndroidFilled from './AndroidFilled';

interface AndroidProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Android: React.FC<AndroidProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <AndroidFilled size={size} color={color} />
  ) : (
    <AndroidOutline size={size} color={color} />
  );
};

export default Android;
