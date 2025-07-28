import React from 'react';
import TrashOutline from './TrashOutline';
import TrashFilled from './TrashFilled';

interface TrashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Trash({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: TrashProps) {
  return filled ? (
    <TrashFilled size={size} color={color} />
  ) : (
    <TrashOutline size={size} color={color} />
  );
}

export default Trash;
