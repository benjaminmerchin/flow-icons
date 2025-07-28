import React from 'react';
import PlayOutline from './PlayOutline';
import PlayFilled from './PlayFilled';

interface PlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Play({ 
  size = 24,
  filled = false,
  ...props
}: PlayProps) {
  return filled ? (
    <PlayFilled size={size} {...props} />
  ) : (
    <PlayOutline size={size} {...props} />
  );
}

export default Play;
