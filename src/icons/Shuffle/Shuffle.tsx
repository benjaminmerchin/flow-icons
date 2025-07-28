import React from 'react';
import ShuffleOutline from './ShuffleOutline';
import ShuffleFilled from './ShuffleFilled';

interface ShuffleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Shuffle: React.FC<ShuffleProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ShuffleFilled size={size} color={color} />
  ) : (
    <ShuffleOutline size={size} color={color} />
  );
};

export default Shuffle;
