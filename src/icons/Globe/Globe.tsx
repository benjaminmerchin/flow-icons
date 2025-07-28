import React from 'react';
import GlobeOutline from './GlobeOutline';
import GlobeFilled from './GlobeFilled';

interface GlobeProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Globe: React.FC<GlobeProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <GlobeFilled size={size} color={color} />
  ) : (
    <GlobeOutline size={size} color={color} />
  );
};

export default Globe;
