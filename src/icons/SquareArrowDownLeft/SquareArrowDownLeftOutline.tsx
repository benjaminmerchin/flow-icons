import React from 'react';

interface SquareArrowDownLeftOutlineProps {
  size?: number | string;
  color?: string;
}

function SquareArrowDownLeftOutline({ 
  size = 24, 
  color = "currentColor" 
}: SquareArrowDownLeftOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.182 16C16.7343 16 17.182 15.5523 17.182 15C17.182 14.4477 16.7343 14 16.182 14H11.4142L18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L10 12.5858V7.81799C10 7.2657 9.55232 6.81799 9.00003 6.81799C8.44775 6.81799 8.00003 7.2657 8.00003 7.81799V15C8.00003 15.5523 8.44775 16 9.00003 16H16.182Z" fill={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowDownLeftOutline;
