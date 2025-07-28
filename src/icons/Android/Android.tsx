import React from 'react';
import AndroidOutline from './AndroidOutline';
import AndroidFilled from './AndroidFilled';

interface AndroidProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Android({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: AndroidProps) {
  return filled ? (
    <AndroidFilled size={size} color={color} />
  ) : (
    <AndroidOutline size={size} color={color} />
  );
}

export default Android;
