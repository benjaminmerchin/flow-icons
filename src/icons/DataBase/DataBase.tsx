import React from 'react';
import DataBaseOutline from './DataBaseOutline';
import DataBaseFilled from './DataBaseFilled';

interface DataBaseProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const DataBase: React.FC<DataBaseProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <DataBaseFilled size={size} color={color} />
  ) : (
    <DataBaseOutline size={size} color={color} />
  );
};

export default DataBase;
