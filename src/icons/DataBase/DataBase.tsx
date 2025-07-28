import React from 'react';
import DataBaseOutline from './DataBaseOutline';
import DataBaseFilled from './DataBaseFilled';

interface DataBaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function DataBase({ 
  size = 24,
  filled = false,
  ...props
}: DataBaseProps) {
  return filled ? (
    <DataBaseFilled size={size} {...props} />
  ) : (
    <DataBaseOutline size={size} {...props} />
  );
}

export default DataBase;
