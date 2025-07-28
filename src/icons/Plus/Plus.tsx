import React from 'react';
import PlusOutline from './PlusOutline';
import PlusFilled from './PlusFilled';

interface PlusProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Plus({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: PlusProps) {
  return filled ? (
    <PlusFilled size={size} color={color} />
  ) : (
    <PlusOutline size={size} color={color} />
  );
}

export default Plus;
