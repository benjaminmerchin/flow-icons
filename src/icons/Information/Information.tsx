import React from 'react';
import InformationOutline from './InformationOutline';
import InformationFilled from './InformationFilled';

interface InformationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Information({ 
  size = 24,
  filled = false,
  ...props
}: InformationProps) {
  return filled ? (
    <InformationFilled size={size} {...props} />
  ) : (
    <InformationOutline size={size} {...props} />
  );
}

export default Information;
