import React from 'react';
import SubtractCircleOutline from './SubtractCircleOutline';
import SubtractCircleFilled from './SubtractCircleFilled';

interface SubtractCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SubtractCircle({ 
  size = 24,
  filled = false,
  ...props
}: SubtractCircleProps) {
  return filled ? (
    <SubtractCircleFilled size={size} {...props} />
  ) : (
    <SubtractCircleOutline size={size} {...props} />
  );
}

export default SubtractCircle;
