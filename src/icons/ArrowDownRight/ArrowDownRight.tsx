import React from 'react';
import ArrowDownRightOutline from './ArrowDownRightOutline';
import ArrowDownRightFilled from './ArrowDownRightFilled';

interface ArrowDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowDownRight({ 
  size = 24,
  filled = false,
  ...props
}: ArrowDownRightProps) {
  return filled ? (
    <ArrowDownRightFilled size={size} {...props} />
  ) : (
    <ArrowDownRightOutline size={size} {...props} />
  );
}

export default ArrowDownRight;
