import React from 'react';
import BubbleOutline from './BubbleOutline';
import BubbleFilled from './BubbleFilled';

interface BubbleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Bubble({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: BubbleProps) {
  return filled ? (
    <BubbleFilled size={size} color={color} />
  ) : (
    <BubbleOutline size={size} color={color} />
  );
}

export default Bubble;
