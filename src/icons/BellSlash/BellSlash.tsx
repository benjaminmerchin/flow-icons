import React from 'react';
import BellSlashOutline from './BellSlashOutline';
import BellSlashFilled from './BellSlashFilled';

interface BellSlashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function BellSlash({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: BellSlashProps) {
  return filled ? (
    <BellSlashFilled size={size} color={color} />
  ) : (
    <BellSlashOutline size={size} color={color} />
  );
}

export default BellSlash;
