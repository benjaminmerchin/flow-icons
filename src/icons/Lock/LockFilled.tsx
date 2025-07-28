import React from 'react';

interface LockFilledProps {
  size?: number | string;
  color?: string;
}

function LockFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: LockFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6.25 9.51027V6.25C6.25 3.07436 8.82436 0.5 12 0.5C15.1756 0.5 17.75 3.07436 17.75 6.25V9.51027C19.2899 9.6373 20.5 10.9273 20.5 12.5L20.5 20.5C20.5 22.1569 19.1569 23.5 17.5 23.5H6.5C4.84315 23.5 3.5 22.1569 3.5 20.5V12.5C3.5 10.9273 4.71012 9.63731 6.25 9.51027ZM8.25 6.25C8.25 4.17893 9.92893 2.5 12 2.5C14.0711 2.5 15.75 4.17893 15.75 6.25V9.5L8.25 9.50001V6.25Z" fill={color}/>
    </svg>
  );
}

export default LockFilled;
