import React from 'react';
import MagicWandOutline from './MagicWandOutline';
import MagicWandFilled from './MagicWandFilled';

interface MagicWandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function MagicWand({ 
  size = 24,
  filled = false,
  ...props
}: MagicWandProps) {
  return filled ? (
    <MagicWandFilled size={size} {...props} />
  ) : (
    <MagicWandOutline size={size} {...props} />
  );
}

export default MagicWand;
