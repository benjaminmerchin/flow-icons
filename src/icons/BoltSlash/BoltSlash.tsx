import React from 'react';
import BoltSlashOutline from './BoltSlashOutline';
import BoltSlashFilled from './BoltSlashFilled';

interface BoltSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function BoltSlash({ 
  size = 24,
  filled = false,
  ...props
}: BoltSlashProps) {
  return filled ? (
    <BoltSlashFilled size={size} {...props} />
  ) : (
    <BoltSlashOutline size={size} {...props} />
  );
}

export default BoltSlash;
