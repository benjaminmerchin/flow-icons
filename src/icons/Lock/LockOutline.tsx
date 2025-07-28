import React from 'react';

interface LockOutlineProps {
  size?: number | string;
  color?: string;
}

function LockOutline({ 
  size = 24, 
  color = "currentColor" 
}: LockOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6.25 9.51027V6.25C6.25 3.07436 8.82436 0.5 12 0.5C15.1756 0.5 17.75 3.07436 17.75 6.25V9.51027C19.2899 9.63731 20.5 10.9273 20.5 12.5V20.5C20.5 22.1569 19.1569 23.5 17.5 23.5H6.5C4.84315 23.5 3.5 22.1569 3.5 20.5V12.5C3.5 10.9273 4.71012 9.63731 6.25 9.51027ZM8.25 6.25C8.25 4.17893 9.92893 2.5 12 2.5C14.0711 2.5 15.75 4.17893 15.75 6.25V9.5L8.25 9.50001V6.25ZM5.5 20.5L5.5 12.5C5.5 11.9477 5.94771 11.5 6.5 11.5L17.5 11.5C18.0523 11.5 18.5 11.9477 18.5 12.5L18.5 20.5C18.5 21.0523 18.0523 21.5 17.5 21.5H6.5C5.94772 21.5 5.5 21.0523 5.5 20.5Z" fill={color}/>
    </svg>
  );
}

export default LockOutline;
