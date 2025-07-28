import React from 'react';
import AlertCircleOutline from './AlertCircleOutline';
import AlertCircleFilled from './AlertCircleFilled';

interface AlertCircleProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function AlertCircle({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: AlertCircleProps) {
  return filled ? (
    <AlertCircleFilled size={size} color={color} />
  ) : (
    <AlertCircleOutline size={size} color={color} />
  );
}

export default AlertCircle;
