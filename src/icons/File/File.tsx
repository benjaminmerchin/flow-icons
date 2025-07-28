import React from 'react';
import FileOutline from './FileOutline';
import FileFilled from './FileFilled';

interface FileProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const File: React.FC<FileProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <FileFilled size={size} color={color} />
  ) : (
    <FileOutline size={size} color={color} />
  );
};

export default File;
