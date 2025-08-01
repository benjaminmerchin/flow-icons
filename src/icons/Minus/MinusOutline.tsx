import React from 'react';

interface MinusOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function MinusOutline({ 
  size = 24,
  ...props
}: MinusOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12Z" fill="currentColor"/>
    </svg>
  );
}

export default MinusOutline;
