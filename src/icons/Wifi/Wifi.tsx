import React from 'react';
import WifiOutline from './WifiOutline';
import WifiFilled from './WifiFilled';

interface WifiProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Wifi({ 
  size = 24,
  filled = false,
  ...props
}: WifiProps) {
  return filled ? (
    <WifiFilled size={size} {...props} />
  ) : (
    <WifiOutline size={size} {...props} />
  );
}

export default Wifi;
