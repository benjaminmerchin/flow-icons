import React from 'react';
import PlusOutline from './PlusOutline';
import PlusFilled from './PlusFilled';

interface PlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Plus({ 
  size = 24,
  filled = false,
  ...props
}: PlusProps) {
  return filled ? (
    <PlusFilled size={size} {...props} />
  ) : (
    <PlusOutline size={size} {...props} />
  );
}

export default Plus;
