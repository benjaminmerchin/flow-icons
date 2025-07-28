import React from 'react';
import LockOutline from './LockOutline';
import LockFilled from './LockFilled';

interface LockProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Lock({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: LockProps) {
  return filled ? (
    <LockFilled size={size} color={color} />
  ) : (
    <LockOutline size={size} color={color} />
  );
}

export default Lock;
