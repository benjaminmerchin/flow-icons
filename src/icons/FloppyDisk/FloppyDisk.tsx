import React from 'react';
import FloppyDiskOutline from './FloppyDiskOutline';
import FloppyDiskFilled from './FloppyDiskFilled';

interface FloppyDiskProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const FloppyDisk: React.FC<FloppyDiskProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <FloppyDiskFilled size={size} color={color} />
  ) : (
    <FloppyDiskOutline size={size} color={color} />
  );
};

export default FloppyDisk;
