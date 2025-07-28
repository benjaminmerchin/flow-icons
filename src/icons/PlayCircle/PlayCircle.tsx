import React from 'react';
import PlayCircleOutline from './PlayCircleOutline';
import PlayCircleFilled from './PlayCircleFilled';

interface PlayCircleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function PlayCircle({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: PlayCircleProps) {
  return filled ? (
    <PlayCircleFilled size={size} color={color} />
  ) : (
    <PlayCircleOutline size={size} color={color} />
  );
}

export default PlayCircle;
