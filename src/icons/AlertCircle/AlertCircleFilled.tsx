import React from 'react';

interface AlertCircleFilledProps {
  size?: number | string;
  color?: string;
}

function AlertCircleFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: AlertCircleFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 16C11.3096 16 10.75 16.5596 10.75 17.25C10.75 17.9404 11.3096 18.5 12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5596 12.6904 16 12 16ZM12 6C11.4477 6 11 6.44772 11 7V13.5C11 14.0523 11.4477 14.5 12 14.5C12.5523 14.5 13 14.0523 13 13.5V7C13 6.44772 12.5523 6 12 6Z" fill={color}/>
    </svg>
  );
}

export default AlertCircleFilled;
