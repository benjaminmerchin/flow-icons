import React from 'react';

interface MapPinOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function MapPinOutline({ 
  size = 24,
  ...props
}: MapPinOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.25 6.75C11.9404 6.75 12.5 6.19036 12.5 5.5C12.5 4.80964 11.9404 4.25 11.25 4.25C10.5596 4.25 10 4.80964 10 5.5C10 6.19036 10.5596 6.75 11.25 6.75Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.25 6.25C6.25 3.07436 8.82436 0.5 12 0.5C15.1756 0.5 17.75 3.07436 17.75 6.25C17.75 9.08455 15.6989 11.4401 13 11.9134L13 20.7199C13 20.9057 12.9741 21.0907 12.923 21.2693L12.2404 23.6587C12.1713 23.9004 11.8287 23.9004 11.7596 23.6587L11.077 21.2693C11.0259 21.0907 11 20.9057 11 20.7199L11 11.9134C8.30105 11.4401 6.25 9.08455 6.25 6.25ZM12 2.5C9.92893 2.5 8.25 4.17893 8.25 6.25C8.25 8.32107 9.92893 10 12 10C14.0711 10 15.75 8.32107 15.75 6.25C15.75 4.17893 14.0711 2.5 12 2.5Z" fill="currentColor"/>
    </svg>
  );
}

export default MapPinOutline;
