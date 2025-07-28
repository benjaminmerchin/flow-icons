import React from 'react';
import TrophyOutline from './TrophyOutline';
import TrophyFilled from './TrophyFilled';

interface TrophyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Trophy({ 
  size = 24,
  filled = false,
  ...props
}: TrophyProps) {
  return filled ? (
    <TrophyFilled size={size} {...props} />
  ) : (
    <TrophyOutline size={size} {...props} />
  );
}

export default Trophy;
