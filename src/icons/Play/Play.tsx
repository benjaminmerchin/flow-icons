import React from 'react';
import PlayOutline from './PlayOutline';
import PlayFilled from './PlayFilled';

interface PlayProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Play({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: PlayProps) {
  return filled ? (
    <PlayFilled size={size} color={color} />
  ) : (
    <PlayOutline size={size} color={color} />
  );
}

export default Play;
