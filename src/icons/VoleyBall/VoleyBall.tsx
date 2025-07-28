import React from 'react';
import VoleyBallOutline from './VoleyBallOutline';
import VoleyBallFilled from './VoleyBallFilled';

interface VoleyBallProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const VoleyBall: React.FC<VoleyBallProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <VoleyBallFilled size={size} color={color} />
  ) : (
    <VoleyBallOutline size={size} color={color} />
  );
};

export default VoleyBall;
