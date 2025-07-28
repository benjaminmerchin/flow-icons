import React from 'react';

interface PlayFilledProps {
  size?: number | string;
  color?: string;
}

function PlayFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: PlayFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 4.89476C5.5 3.72128 6.78674 3.00226 7.78615 3.61728L19.3321 10.7225C20.2839 11.3082 20.2839 12.6917 19.3321 13.2775L7.78615 20.3827C6.78674 20.9977 5.5 20.2787 5.5 19.1052V4.89476Z" fill={color}/>
    </svg>
  );
}

export default PlayFilled;
