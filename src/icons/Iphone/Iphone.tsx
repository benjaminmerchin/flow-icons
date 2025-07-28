import React from 'react';
import IphoneOutline from './IphoneOutline';
import IphoneFilled from './IphoneFilled';

interface IphoneProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Iphone({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: IphoneProps) {
  return filled ? (
    <IphoneFilled size={size} color={color} />
  ) : (
    <IphoneOutline size={size} color={color} />
  );
}

export default Iphone;
