import React from 'react';

interface FileFilledProps {
  size?: number | string;
  color?: string;
}

function FileFilled({ 
  size = 24, 
  color = "currentColor" 
}: FileFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.5 1V7.5C11.5 9.15685 12.8431 10.5 14.5 10.5H21V20C21 21.6569 19.6569 23 18 23H6C4.34315 23 3 21.6569 3 20V4C3 2.34315 4.34315 1 6 1H11.5Z" fill={color}/>
<path d="M13.5 1.31015V7.5C13.5 8.05229 13.9477 8.5 14.5 8.5H20.6898C20.5462 8.20913 20.355 7.94082 20.1213 7.70711L14.2929 1.87868C14.0592 1.64496 13.7909 1.45379 13.5 1.31015Z" fill={color}/>
    </svg>
  );
}

export default FileFilled;
