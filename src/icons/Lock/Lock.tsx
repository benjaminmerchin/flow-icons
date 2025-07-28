import React from 'react';
import LockOutline from './LockOutline';
import LockFilled from './LockFilled';

interface LockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Lock({ 
  size = 24,
  filled = false,
  ...props
}: LockProps) {
  return filled ? (
    <LockFilled size={size} {...props} />
  ) : (
    <LockOutline size={size} {...props} />
  );
}

export default Lock;
