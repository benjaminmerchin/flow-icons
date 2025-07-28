import React from 'react';
import TrashOutline from './TrashOutline';
import TrashFilled from './TrashFilled';

interface TrashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Trash({ 
  size = 24,
  filled = false,
  ...props
}: TrashProps) {
  return filled ? (
    <TrashFilled size={size} {...props} />
  ) : (
    <TrashOutline size={size} {...props} />
  );
}

export default Trash;
