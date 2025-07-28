import React from 'react';

interface AndroidOutlineProps {
  size?: number | string;
  color?: string;
}

const AndroidOutline: React.FC<AndroidOutlineProps> = ({ 
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
      
<path d="M12 6.5C12.5523 6.5 13 6.05228 13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5C11 6.05228 11.4477 6.5 12 6.5Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C6.34315 1 5 2.34315 5 4V20C5 21.6569 6.34315 23 8 23H16C17.6569 23 19 21.6569 19 20V4C19 2.34315 17.6569 1 16 1H8ZM7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4V20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20V4Z" fill={color}/>

    </svg>
  );
};

export default AndroidOutline;
