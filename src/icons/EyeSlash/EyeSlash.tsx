import React from 'react';
import EyeSlashOutline from './EyeSlashOutline';
import EyeSlashFilled from './EyeSlashFilled';

interface EyeSlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function EyeSlash({ 
  size = 24,
  filled = false,
  ...props
}: EyeSlashProps) {
  return filled ? (
    <EyeSlashFilled size={size} {...props} />
  ) : (
    <EyeSlashOutline size={size} {...props} />
  );
}

export default EyeSlash;
