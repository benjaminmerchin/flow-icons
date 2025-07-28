import React from 'react';
import TrophyOutline from './TrophyOutline';
import TrophyFilled from './TrophyFilled';

interface TrophyProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Trophy({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: TrophyProps) {
  return filled ? (
    <TrophyFilled size={size} color={color} />
  ) : (
    <TrophyOutline size={size} color={color} />
  );
}

export default Trophy;
