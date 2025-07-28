import React from 'react';
import BoltSlashOutline from './BoltSlashOutline';
import BoltSlashFilled from './BoltSlashFilled';

interface BoltSlashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function BoltSlash({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: BoltSlashProps) {
  return filled ? (
    <BoltSlashFilled size={size} color={color} />
  ) : (
    <BoltSlashOutline size={size} color={color} />
  );
}

export default BoltSlash;
