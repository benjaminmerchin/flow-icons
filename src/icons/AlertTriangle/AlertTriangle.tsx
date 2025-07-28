import React from 'react';
import AlertTriangleOutline from './AlertTriangleOutline';
import AlertTriangleFilled from './AlertTriangleFilled';

interface AlertTriangleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function AlertTriangle({ 
  size = 24,
  filled = false,
  ...props
}: AlertTriangleProps) {
  return filled ? (
    <AlertTriangleFilled size={size} {...props} />
  ) : (
    <AlertTriangleOutline size={size} {...props} />
  );
}

export default AlertTriangle;
