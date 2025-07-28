import React from 'react';
import FolderOutline from './FolderOutline';
import FolderFilled from './FolderFilled';

interface FolderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Folder({ 
  size = 24,
  filled = false,
  ...props
}: FolderProps) {
  return filled ? (
    <FolderFilled size={size} {...props} />
  ) : (
    <FolderOutline size={size} {...props} />
  );
}

export default Folder;
