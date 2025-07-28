import React from 'react';
import ArrowSplitDiagonalOutline from './ArrowSplitDiagonalOutline';
import ArrowSplitDiagonalFilled from './ArrowSplitDiagonalFilled';

interface ArrowSplitDiagonalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowSplitDiagonal({ 
  size = 24,
  filled = false,
  ...props
}: ArrowSplitDiagonalProps) {
  return filled ? (
    <ArrowSplitDiagonalFilled size={size} {...props} />
  ) : (
    <ArrowSplitDiagonalOutline size={size} {...props} />
  );
}

export default ArrowSplitDiagonal;
