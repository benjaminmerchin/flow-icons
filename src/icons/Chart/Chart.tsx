import React from 'react';
import ChartOutline from './ChartOutline';
import ChartFilled from './ChartFilled';

interface ChartProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Chart: React.FC<ChartProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <ChartFilled size={size} color={color} />
  ) : (
    <ChartOutline size={size} color={color} />
  );
};

export default Chart;
