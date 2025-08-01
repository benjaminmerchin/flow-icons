import React from 'react';

interface MinusFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function MinusFilled({ 
  size = 24,
  ...props
}: MinusFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H5.99997C5.44768 11 4.99997 11.4477 4.99997 12C4.99997 12.5523 5.44768 13 5.99997 13H18Z" fill="currentColor"/>
    </svg>
  );
}

export default MinusFilled;
