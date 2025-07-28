import React from 'react';
import FloppyDiskOutline from './FloppyDiskOutline';
import FloppyDiskFilled from './FloppyDiskFilled';

interface FloppyDiskProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function FloppyDisk({ 
  size = 24,
  filled = false,
  ...props
}: FloppyDiskProps) {
  return filled ? (
    <FloppyDiskFilled size={size} {...props} />
  ) : (
    <FloppyDiskOutline size={size} {...props} />
  );
}

export default FloppyDisk;
