import React from 'react';
import CameraOutline from './CameraOutline';
import CameraFilled from './CameraFilled';

interface CameraProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Camera({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: CameraProps) {
  return filled ? (
    <CameraFilled size={size} color={color} />
  ) : (
    <CameraOutline size={size} color={color} />
  );
}

export default Camera;
