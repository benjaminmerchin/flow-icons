import React from 'react';

interface ListItemOutlineProps {
  size?: number | string;
  color?: string;
}

function ListItemOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: ListItemOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 7C5.82843 7 6.5 6.32843 6.5 5.5C6.5 4.67157 5.82843 4 5 4C4.17157 4 3.5 4.67157 3.5 5.5C3.5 6.32843 4.17157 7 5 7Z" fill={color}/>
<path d="M9.5 4.5C8.94771 4.5 8.5 4.94772 8.5 5.5C8.5 6.05228 8.94771 6.5 9.5 6.5H19.5C20.0523 6.5 20.5 6.05228 20.5 5.5C20.5 4.94772 20.0523 4.5 19.5 4.5H9.5Z" fill={color}/>
<path d="M9.5 11C8.94771 11 8.5 11.4477 8.5 12C8.5 12.5523 8.94771 13 9.5 13H19.5C20.0523 13 20.5 12.5523 20.5 12C20.5 11.4477 20.0523 11 19.5 11H9.5Z" fill={color}/>
<path d="M8.5 18.5C8.5 17.9477 8.94771 17.5 9.5 17.5H19.5C20.0523 17.5 20.5 17.9477 20.5 18.5C20.5 19.0523 20.0523 19.5 19.5 19.5H9.5C8.94771 19.5 8.5 19.0523 8.5 18.5Z" fill={color}/>
<path d="M6.5 12C6.5 12.8284 5.82843 13.5 5 13.5C4.17157 13.5 3.5 12.8284 3.5 12C3.5 11.1716 4.17157 10.5 5 10.5C5.82843 10.5 6.5 11.1716 6.5 12Z" fill={color}/>
<path d="M5 20C5.82843 20 6.5 19.3284 6.5 18.5C6.5 17.6716 5.82843 17 5 17C4.17157 17 3.5 17.6716 3.5 18.5C3.5 19.3284 4.17157 20 5 20Z" fill={color}/>
    </svg>
  );
}

export default ListItemOutline;
