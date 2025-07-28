import React from 'react';
import DotsSixVerticalOutline from './DotsSixVerticalOutline';
import DotsSixVerticalFilled from './DotsSixVerticalFilled';

interface DotsSixVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function DotsSixVertical({ 
  size = 24,
  filled = false,
  ...props
}: DotsSixVerticalProps) {
  return filled ? (
    <DotsSixVerticalFilled size={size} {...props} />
  ) : (
    <DotsSixVerticalOutline size={size} {...props} />
  );
}

export default DotsSixVertical;
