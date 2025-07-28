import React from 'react';
import CameraOutline from './CameraOutline';
import CameraFilled from './CameraFilled';

interface CameraProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Camera({ 
  size = 24,
  filled = false,
  ...props
}: CameraProps) {
  return filled ? (
    <CameraFilled size={size} {...props} />
  ) : (
    <CameraOutline size={size} {...props} />
  );
}

export default Camera;
