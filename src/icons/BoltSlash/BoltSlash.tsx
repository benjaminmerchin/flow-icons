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
  color = "#1A1A1A",
  filled = false 
}: BoltSlashProps) {
  return filled ? (
    <BoltSlashFilled size={size} color={color} />
  ) : (
    <BoltSlashOutline size={size} color={color} />
  );
}

export default BoltSlash;
