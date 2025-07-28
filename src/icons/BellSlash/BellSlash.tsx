import React from 'react';
import BellSlashOutline from './BellSlashOutline';
import BellSlashFilled from './BellSlashFilled';

interface BellSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function BellSlash({ 
  size = 24,
  filled = false,
  ...props
}: BellSlashProps) {
  return filled ? (
    <BellSlashFilled size={size} {...props} />
  ) : (
    <BellSlashOutline size={size} {...props} />
  );
}

export default BellSlash;
