import React from 'react';
import GaugeOutline from './GaugeOutline';
import GaugeFilled from './GaugeFilled';

interface GaugeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Gauge({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: GaugeProps) {
  return filled ? (
    <GaugeFilled size={size} color={color} />
  ) : (
    <GaugeOutline size={size} color={color} />
  );
}

export default Gauge;
