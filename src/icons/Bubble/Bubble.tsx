import React from 'react';
import BubbleOutline from './BubbleOutline';
import BubbleFilled from './BubbleFilled';

interface BubbleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Bubble({ 
  size = 24,
  filled = false,
  ...props
}: BubbleProps) {
  return filled ? (
    <BubbleFilled size={size} {...props} />
  ) : (
    <BubbleOutline size={size} {...props} />
  );
}

export default Bubble;
