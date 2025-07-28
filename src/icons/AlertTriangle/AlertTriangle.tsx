import React from 'react';
import AlertTriangleOutline from './AlertTriangleOutline';
import AlertTriangleFilled from './AlertTriangleFilled';

interface AlertTriangleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const AlertTriangle: React.FC<AlertTriangleProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <AlertTriangleFilled size={size} color={color} />
  ) : (
    <AlertTriangleOutline size={size} color={color} />
  );
};

export default AlertTriangle;
