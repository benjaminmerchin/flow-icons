import React from 'react';
import AlertTriangleOutline from './AlertTriangleOutline';
import AlertTriangleFilled from './AlertTriangleFilled';

interface AlertTriangleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function AlertTriangle({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: AlertTriangleProps) {
  return filled ? (
    <AlertTriangleFilled size={size} color={color} />
  ) : (
    <AlertTriangleOutline size={size} color={color} />
  );
}

export default AlertTriangle;
