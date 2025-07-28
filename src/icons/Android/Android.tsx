import React from 'react';
import AndroidOutline from './AndroidOutline';
import AndroidFilled from './AndroidFilled';

interface AndroidProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Android({ 
  size = 24,
  filled = false,
  ...props
}: AndroidProps) {
  return filled ? (
    <AndroidFilled size={size} {...props} />
  ) : (
    <AndroidOutline size={size} {...props} />
  );
}

export default Android;
