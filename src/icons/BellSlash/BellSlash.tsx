import React from 'react';
import BellSlashOutline from './BellSlashOutline';
import BellSlashFilled from './BellSlashFilled';

interface BellSlashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const BellSlash: React.FC<BellSlashProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BellSlashFilled size={size} color={color} />
  ) : (
    <BellSlashOutline size={size} color={color} />
  );
};

export default BellSlash;
