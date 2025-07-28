import React from 'react';
import EnveloppeOutline from './EnveloppeOutline';
import EnveloppeFilled from './EnveloppeFilled';

interface EnveloppeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Enveloppe({ 
  size = 24,
  filled = false,
  ...props
}: EnveloppeProps) {
  return filled ? (
    <EnveloppeFilled size={size} {...props} />
  ) : (
    <EnveloppeOutline size={size} {...props} />
  );
}

export default Enveloppe;
