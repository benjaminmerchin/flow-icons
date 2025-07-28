import React from 'react';
import GaugeOutline from './GaugeOutline';
import GaugeFilled from './GaugeFilled';

interface GaugeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Gauge({ 
  size = 24,
  filled = false,
  ...props
}: GaugeProps) {
  return filled ? (
    <GaugeFilled size={size} {...props} />
  ) : (
    <GaugeOutline size={size} {...props} />
  );
}

export default Gauge;
