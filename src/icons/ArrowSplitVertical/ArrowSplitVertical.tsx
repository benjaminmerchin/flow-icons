import React from 'react';
import ArrowSplitVerticalOutline from './ArrowSplitVerticalOutline';
import ArrowSplitVerticalFilled from './ArrowSplitVerticalFilled';

interface ArrowSplitVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function ArrowSplitVertical({ 
  size = 24,
  filled = false,
  ...props
}: ArrowSplitVerticalProps) {
  return filled ? (
    <ArrowSplitVerticalFilled size={size} {...props} />
  ) : (
    <ArrowSplitVerticalOutline size={size} {...props} />
  );
}

export default ArrowSplitVertical;
