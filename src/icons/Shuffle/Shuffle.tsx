import React from 'react';
import ShuffleOutline from './ShuffleOutline';
import ShuffleFilled from './ShuffleFilled';

interface ShuffleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Shuffle({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ShuffleProps) {
  return filled ? (
    <ShuffleFilled size={size} color={color} />
  ) : (
    <ShuffleOutline size={size} color={color} />
  );
}

export default Shuffle;
