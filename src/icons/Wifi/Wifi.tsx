import React from 'react';
import WifiOutline from './WifiOutline';
import WifiFilled from './WifiFilled';

interface WifiProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Wifi({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: WifiProps) {
  return filled ? (
    <WifiFilled size={size} color={color} />
  ) : (
    <WifiOutline size={size} color={color} />
  );
}

export default Wifi;
