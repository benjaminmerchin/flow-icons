import React from 'react';
import EyeSlashOutline from './EyeSlashOutline';
import EyeSlashFilled from './EyeSlashFilled';

interface EyeSlashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function EyeSlash({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: EyeSlashProps) {
  return filled ? (
    <EyeSlashFilled size={size} color={color} />
  ) : (
    <EyeSlashOutline size={size} color={color} />
  );
}

export default EyeSlash;
