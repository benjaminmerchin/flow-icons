import React from 'react';
import LineArrowLeftOutline from './LineArrowLeftOutline';
import LineArrowLeftFilled from './LineArrowLeftFilled';

interface LineArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function LineArrowLeft({ 
  size = 24,
  filled = false,
  ...props
}: LineArrowLeftProps) {
  return filled ? (
    <LineArrowLeftFilled size={size} {...props} />
  ) : (
    <LineArrowLeftOutline size={size} {...props} />
  );
}

export default LineArrowLeft;
