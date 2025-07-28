import React from 'react';
import AlertCircleOutline from './AlertCircleOutline';
import AlertCircleFilled from './AlertCircleFilled';

interface AlertCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function AlertCircle({ 
  size = 24,
  filled = false,
  ...props
}: AlertCircleProps) {
  return filled ? (
    <AlertCircleFilled size={size} {...props} />
  ) : (
    <AlertCircleOutline size={size} {...props} />
  );
}

export default AlertCircle;
