import React from 'react';
import InformationOutline from './InformationOutline';
import InformationFilled from './InformationFilled';

interface InformationProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Information: React.FC<InformationProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <InformationFilled size={size} color={color} />
  ) : (
    <InformationOutline size={size} color={color} />
  );
};

export default Information;
