import React from 'react';
import MapPinOutline from './MapPinOutline';
import MapPinFilled from './MapPinFilled';

interface MapPinProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const MapPin: React.FC<MapPinProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <MapPinFilled size={size} color={color} />
  ) : (
    <MapPinOutline size={size} color={color} />
  );
};

export default MapPin;
