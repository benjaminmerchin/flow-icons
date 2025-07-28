import React from 'react';
import PhoneOutline from './PhoneOutline';
import PhoneFilled from './PhoneFilled';

interface PhoneProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Phone({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: PhoneProps) {
  return filled ? (
    <PhoneFilled size={size} color={color} />
  ) : (
    <PhoneOutline size={size} color={color} />
  );
}

export default Phone;
