import React from 'react';

interface MapPinFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function MapPinFilled({ 
  size = 24,
  ...props
}: MapPinFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6.25 6.25C6.25 3.07436 8.82436 0.5 12 0.5C15.1756 0.5 17.75 3.07436 17.75 6.25C17.75 9.08455 15.6989 11.4401 13 11.9134L13 20.7199C13 20.9057 12.9741 21.0907 12.923 21.2693L12.2404 23.6587C12.1713 23.9004 11.8287 23.9004 11.7596 23.6587L11.077 21.2693C11.0259 21.0907 11 20.9057 11 20.7199L11 11.9134C8.30105 11.4401 6.25 9.08455 6.25 6.25ZM11 6.75C11.8284 6.75 12.5 6.07843 12.5 5.25C12.5 4.42157 11.8284 3.75 11 3.75C10.1716 3.75 9.5 4.42157 9.5 5.25C9.5 6.07843 10.1716 6.75 11 6.75Z" fill="currentColor"/>
    </svg>
  );
}

export default MapPinFilled;
