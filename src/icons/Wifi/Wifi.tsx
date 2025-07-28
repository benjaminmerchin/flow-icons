import React from 'react';
import WifiOutline from './WifiOutline';
import WifiFilled from './WifiFilled';

interface WifiProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Wifi: React.FC<WifiProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <WifiFilled size={size} color={color} />
  ) : (
    <WifiOutline size={size} color={color} />
  );
};

export default Wifi;
