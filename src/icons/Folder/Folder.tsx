import React from 'react';
import FolderOutline from './FolderOutline';
import FolderFilled from './FolderFilled';

interface FolderProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Folder: React.FC<FolderProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <FolderFilled size={size} color={color} />
  ) : (
    <FolderOutline size={size} color={color} />
  );
};

export default Folder;
