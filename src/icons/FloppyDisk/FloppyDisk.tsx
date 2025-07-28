import React from 'react';
import FloppyDiskOutline from './FloppyDiskOutline';
import FloppyDiskFilled from './FloppyDiskFilled';

interface FloppyDiskProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function FloppyDisk({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: FloppyDiskProps) {
  return filled ? (
    <FloppyDiskFilled size={size} color={color} />
  ) : (
    <FloppyDiskOutline size={size} color={color} />
  );
}

export default FloppyDisk;
