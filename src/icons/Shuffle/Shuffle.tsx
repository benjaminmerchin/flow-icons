import React from 'react';
import ShuffleOutline from './ShuffleOutline';
import ShuffleFilled from './ShuffleFilled';

interface ShuffleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Shuffle({ 
  size = 24,
  filled = false,
  ...props
}: ShuffleProps) {
  return filled ? (
    <ShuffleFilled size={size} {...props} />
  ) : (
    <ShuffleOutline size={size} {...props} />
  );
}

export default Shuffle;
