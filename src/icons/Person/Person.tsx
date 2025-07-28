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
  color = "#1A1A1A",
  filled = false 
}: PersonProps) {
  return filled ? (
    <PersonFilled size={size} color={color} />
  ) : (
    <PersonOutline size={size} color={color} />
  );
}

export default Person;
