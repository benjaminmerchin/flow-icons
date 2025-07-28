import React from 'react';
import FolderOutline from './FolderOutline';
import FolderFilled from './FolderFilled';

interface FolderProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Folder({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: FolderProps) {
  return filled ? (
    <FolderFilled size={size} color={color} />
  ) : (
    <FolderOutline size={size} color={color} />
  );
}

export default Folder;
