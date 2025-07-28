import React from 'react';

interface FloppyDiskFilledProps {
  size?: number | string;
  color?: string;
}

function FloppyDiskFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: FloppyDiskFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H5.5V14C5.5 12.8954 6.39543 12 7.5 12H16.5C17.6046 12 18.5 12.8954 18.5 14V23H20C21.6569 23 23 21.6569 23 20V6.82843C23 6.03278 22.6839 5.26972 22.1213 4.70711L19.2929 1.87868C18.7303 1.31607 17.9672 1 17.1716 1H4ZM7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7Z" fill={color}/>
<path d="M16.5 23V14H7.5V23H16.5Z" fill={color}/>
    </svg>
  );
}

export default FloppyDiskFilled;
