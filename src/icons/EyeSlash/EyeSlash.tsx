import React from 'react';
import EyeSlashOutline from './EyeSlashOutline';
import EyeSlashFilled from './EyeSlashFilled';

interface EyeSlashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const EyeSlash: React.FC<EyeSlashProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <EyeSlashFilled size={size} color={color} />
  ) : (
    <EyeSlashOutline size={size} color={color} />
  );
};

export default EyeSlash;
