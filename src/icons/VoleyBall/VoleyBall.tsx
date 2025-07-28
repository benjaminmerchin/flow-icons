import React from 'react';
import VoleyBallOutline from './VoleyBallOutline';
import VoleyBallFilled from './VoleyBallFilled';

interface VoleyBallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function VoleyBall({ 
  size = 24,
  filled = false,
  ...props
}: VoleyBallProps) {
  return filled ? (
    <VoleyBallFilled size={size} {...props} />
  ) : (
    <VoleyBallOutline size={size} {...props} />
  );
}

export default VoleyBall;
