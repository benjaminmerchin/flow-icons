import React from 'react';
import LineArrowRightOutline from './LineArrowRightOutline';
import LineArrowRightFilled from './LineArrowRightFilled';

interface LineArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function LineArrowRight({ 
  size = 24,
  filled = false,
  ...props
}: LineArrowRightProps) {
  return filled ? (
    <LineArrowRightFilled size={size} {...props} />
  ) : (
    <LineArrowRightOutline size={size} {...props} />
  );
}

export default LineArrowRight;
