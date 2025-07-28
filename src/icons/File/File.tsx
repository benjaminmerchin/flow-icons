import React from 'react';
import FileOutline from './FileOutline';
import FileFilled from './FileFilled';

interface FileProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function File({ 
  size = 24,
  filled = false,
  ...props
}: FileProps) {
  return filled ? (
    <FileFilled size={size} {...props} />
  ) : (
    <FileOutline size={size} {...props} />
  );
}

export default File;
