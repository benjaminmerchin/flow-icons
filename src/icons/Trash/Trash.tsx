import React from 'react';
import TrashOutline from './TrashOutline';
import TrashFilled from './TrashFilled';

interface TrashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Trash: React.FC<TrashProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <TrashFilled size={size} color={color} />
  ) : (
    <TrashOutline size={size} color={color} />
  );
};

export default Trash;
