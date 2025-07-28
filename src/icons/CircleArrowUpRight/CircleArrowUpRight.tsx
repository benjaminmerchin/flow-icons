import React from 'react';
import CircleArrowUpRightOutline from './CircleArrowUpRightOutline';
import CircleArrowUpRightFilled from './CircleArrowUpRightFilled';

interface CircleArrowUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function CircleArrowUpRight({ 
  size = 24,
  filled = false,
  ...props
}: CircleArrowUpRightProps) {
  return filled ? (
    <CircleArrowUpRightFilled size={size} {...props} />
  ) : (
    <CircleArrowUpRightOutline size={size} {...props} />
  );
}

export default CircleArrowUpRight;
