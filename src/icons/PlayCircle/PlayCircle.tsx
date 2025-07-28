import React from 'react';
import PlayCircleOutline from './PlayCircleOutline';
import PlayCircleFilled from './PlayCircleFilled';

interface PlayCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function PlayCircle({ 
  size = 24,
  filled = false,
  ...props
}: PlayCircleProps) {
  return filled ? (
    <PlayCircleFilled size={size} {...props} />
  ) : (
    <PlayCircleOutline size={size} {...props} />
  );
}

export default PlayCircle;
