import React from 'react';
import ChartOutline from './ChartOutline';
import ChartFilled from './ChartFilled';

interface ChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Chart({ 
  size = 24,
  filled = false,
  ...props
}: ChartProps) {
  return filled ? (
    <ChartFilled size={size} {...props} />
  ) : (
    <ChartOutline size={size} {...props} />
  );
}

export default Chart;
