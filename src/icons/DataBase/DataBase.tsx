import React from 'react';
import DataBaseOutline from './DataBaseOutline';
import DataBaseFilled from './DataBaseFilled';

interface DataBaseProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function DataBase({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: DataBaseProps) {
  return filled ? (
    <DataBaseFilled size={size} color={color} />
  ) : (
    <DataBaseOutline size={size} color={color} />
  );
}

export default DataBase;
