import React from 'react';
import ArrowSplitHorizontalOutline from './ArrowSplitHorizontalOutline';
import ArrowSplitHorizontalFilled from './ArrowSplitHorizontalFilled';

interface ArrowSplitHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowSplitHorizontal({ 
  size = 24,
  filled = false,
  ...props
}: ArrowSplitHorizontalProps) {
  return filled ? (
    <ArrowSplitHorizontalFilled size={size} {...props} />
  ) : (
    <ArrowSplitHorizontalOutline size={size} {...props} />
  );
}

export default ArrowSplitHorizontal;
