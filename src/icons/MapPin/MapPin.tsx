import React from 'react';
import MapPinOutline from './MapPinOutline';
import MapPinFilled from './MapPinFilled';

interface MapPinProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function MapPin({ 
  size = 24,
  filled = false,
  ...props
}: MapPinProps) {
  return filled ? (
    <MapPinFilled size={size} {...props} />
  ) : (
    <MapPinOutline size={size} {...props} />
  );
}

export default MapPin;
