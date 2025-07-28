import React from 'react';
import PlayOutline from './PlayOutline';
import PlayFilled from './PlayFilled';

interface PlayProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Play: React.FC<PlayProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <PlayFilled size={size} color={color} />
  ) : (
    <PlayOutline size={size} color={color} />
  );
};

export default Play;
