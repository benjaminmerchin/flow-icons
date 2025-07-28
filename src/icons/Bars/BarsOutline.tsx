import React from 'react';

interface BarsOutlineProps {
  size?: number | string;
  color?: string;
}

const BarsOutline: React.FC<BarsOutlineProps> = ({ 
  size = 24, 
  color = "#1A1A1A" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C9 2.89543 9.89543 2 11 2H13C14.1046 2 15 2.89543 15 4V17C15 17.5523 14.5523 18 14 18H10C9.44771 18 9 17.5523 9 17V4ZM13 4H11V16H13V4Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 6C2.39543 6 1.5 6.89543 1.5 8V17C1.5 17.5523 1.94772 18 2.5 18H6.5C7.05228 18 7.5 17.5523 7.5 17V8C7.5 6.89543 6.60457 6 5.5 6H3.5ZM3.5 8H5.5V16H3.5V8Z" fill={color}/>
<path d="M22.5 21.5C23.0523 21.5 23.5 21.0523 23.5 20.5C23.5 19.9477 23.0523 19.5 22.5 19.5L1.5 19.5C0.947716 19.5 0.5 19.9477 0.5 20.5C0.5 21.0523 0.947716 21.5 1.5 21.5L22.5 21.5Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 8C17.3954 8 16.5 8.89543 16.5 10V17C16.5 17.5523 16.9477 18 17.5 18H21.5C22.0523 18 22.5 17.5523 22.5 17V10C22.5 8.89543 21.6046 8 20.5 8H18.5ZM18.5 10H20.5V16H18.5V10Z" fill={color}/>

    </svg>
  );
};

export default BarsOutline;
