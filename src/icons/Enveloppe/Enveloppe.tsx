import React from 'react';
import EnveloppeOutline from './EnveloppeOutline';
import EnveloppeFilled from './EnveloppeFilled';

interface EnveloppeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Enveloppe: React.FC<EnveloppeProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <EnveloppeFilled size={size} color={color} />
  ) : (
    <EnveloppeOutline size={size} color={color} />
  );
};

export default Enveloppe;
