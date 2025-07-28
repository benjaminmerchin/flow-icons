import React from 'react';
import PersonOutline from './PersonOutline';
import PersonFilled from './PersonFilled';

interface PersonProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Person({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: PersonProps) {
  return filled ? (
    <PersonFilled size={size} color={color} />
  ) : (
    <PersonOutline size={size} color={color} />
  );
}

export default Person;
