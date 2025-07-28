import React from 'react';
import CameraOutline from './CameraOutline';
import CameraFilled from './CameraFilled';

interface CameraProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Camera: React.FC<CameraProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <CameraFilled size={size} color={color} />
  ) : (
    <CameraOutline size={size} color={color} />
  );
};

export default Camera;
