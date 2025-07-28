import React from 'react';
import InformationOutline from './InformationOutline';
import InformationFilled from './InformationFilled';

interface InformationProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Information({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: InformationProps) {
  return filled ? (
    <InformationFilled size={size} color={color} />
  ) : (
    <InformationOutline size={size} color={color} />
  );
}

export default Information;
