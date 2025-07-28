import React from 'react';

interface FolderFilledProps {
  size?: number | string;
  color?: string;
}

function FolderFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: FolderFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5.5C1 3.84315 2.34315 2.5 4 2.5H8.86762C9.92141 2.5 10.8979 3.0529 11.4401 3.95651L11.7749 4.5145C11.9556 4.8157 12.2811 5 12.6324 5H20C21.6569 5 23 6.34315 23 8V9L1 9V5.5Z" fill={color}/>
<path d="M1 11V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V11L1 11Z" fill={color}/>
    </svg>
  );
}

export default FolderFilled;
