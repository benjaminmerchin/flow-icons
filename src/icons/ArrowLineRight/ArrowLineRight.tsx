import React from 'react';
import ArrowLineRightOutline from './ArrowLineRightOutline';
import ArrowLineRightFilled from './ArrowLineRightFilled';

interface ArrowLineRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowLineRight({ 
  size = 24,
  filled = false,
  ...props
}: ArrowLineRightProps) {
  return filled ? (
    <ArrowLineRightFilled size={size} {...props} />
  ) : (
    <ArrowLineRightOutline size={size} {...props} />
  );
}

export default ArrowLineRight;
