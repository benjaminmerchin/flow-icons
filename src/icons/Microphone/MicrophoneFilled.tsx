import React from 'react';

interface MicrophoneFilledProps {
  size?: number | string;
  color?: string;
}

function MicrophoneFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: MicrophoneFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1C9.92893 1 8.25 2.67893 8.25 4.75V10.75C8.25 12.8211 9.92893 14.5 12 14.5C14.0711 14.5 15.75 12.8211 15.75 10.75V4.75C15.75 2.67893 14.0711 1 12 1Z" fill={color}/>
<path d="M6.5 9C6.5 8.44772 6.05228 8 5.5 8C4.94772 8 4.5 8.44772 4.5 9V10.5C4.5 14.3031 7.33064 17.445 11 17.9339V21H7C6.44772 21 6 21.4477 6 22C6 22.5523 6.44772 23 7 23H17C17.5523 23 18 22.5523 18 22C18 21.4477 17.5523 21 17 21H13V17.9339C16.6694 17.445 19.5 14.3031 19.5 10.5V9C19.5 8.44772 19.0523 8 18.5 8C17.9477 8 17.5 8.44772 17.5 9V10.5C17.5 13.5376 15.0376 16 12 16C8.96243 16 6.5 13.5376 6.5 10.5V9Z" fill={color}/>
    </svg>
  );
}

export default MicrophoneFilled;
