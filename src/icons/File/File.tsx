import React from 'react';
import FileOutline from './FileOutline';
import FileFilled from './FileFilled';

interface FileProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function File({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: FileProps) {
  return filled ? (
    <FileFilled size={size} color={color} />
  ) : (
    <FileOutline size={size} color={color} />
  );
}

export default File;
