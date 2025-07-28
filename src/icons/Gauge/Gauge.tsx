import React from 'react';
import GaugeOutline from './GaugeOutline';
import GaugeFilled from './GaugeFilled';

interface GaugeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Gauge: React.FC<GaugeProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <GaugeFilled size={size} color={color} />
  ) : (
    <GaugeOutline size={size} color={color} />
  );
};

export default Gauge;
