import React from 'react';
import ChartOutline from './ChartOutline';
import ChartFilled from './ChartFilled';

interface ChartProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Chart({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: ChartProps) {
  return filled ? (
    <ChartFilled size={size} color={color} />
  ) : (
    <ChartOutline size={size} color={color} />
  );
}

export default Chart;
