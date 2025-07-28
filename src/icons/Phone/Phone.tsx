import React from 'react';
import PhoneOutline from './PhoneOutline';
import PhoneFilled from './PhoneFilled';

interface PhoneProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Phone: React.FC<PhoneProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <PhoneFilled size={size} color={color} />
  ) : (
    <PhoneOutline size={size} color={color} />
  );
};

export default Phone;
