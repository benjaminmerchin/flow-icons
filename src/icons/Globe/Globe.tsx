import React from 'react';
import GlobeOutline from './GlobeOutline';
import GlobeFilled from './GlobeFilled';

interface GlobeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Globe({ 
  size = 24,
  filled = false,
  ...props
}: GlobeProps) {
  return filled ? (
    <GlobeFilled size={size} {...props} />
  ) : (
    <GlobeOutline size={size} {...props} />
  );
}

export default Globe;
