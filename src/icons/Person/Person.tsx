import React from 'react';
import PersonOutline from './PersonOutline';
import PersonFilled from './PersonFilled';

interface PersonProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Person({ 
  size = 24,
  filled = false,
  ...props
}: PersonProps) {
  return filled ? (
    <PersonFilled size={size} {...props} />
  ) : (
    <PersonOutline size={size} {...props} />
  );
}

export default Person;
