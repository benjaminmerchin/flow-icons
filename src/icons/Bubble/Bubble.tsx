import React from 'react';
import BubbleOutline from './BubbleOutline';
import BubbleFilled from './BubbleFilled';

interface BubbleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Bubble: React.FC<BubbleProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <BubbleFilled size={size} color={color} />
  ) : (
    <BubbleOutline size={size} color={color} />
  );
};

export default Bubble;
