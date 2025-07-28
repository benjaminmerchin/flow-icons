import React from 'react';
import PlayCircleOutline from './PlayCircleOutline';
import PlayCircleFilled from './PlayCircleFilled';

interface PlayCircleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const PlayCircle: React.FC<PlayCircleProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <PlayCircleFilled size={size} color={color} />
  ) : (
    <PlayCircleOutline size={size} color={color} />
  );
};

export default PlayCircle;
