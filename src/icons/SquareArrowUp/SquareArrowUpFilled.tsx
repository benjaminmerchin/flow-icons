import React from 'react';

interface SquareArrowUpFilledProps {
  size?: number | string;
  color?: string;
}

function SquareArrowUpFilled({ 
  size = 24, 
  color = "currentColor" 
}: SquareArrowUpFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.707 0.292893C12.5195 0.105357 12.2652 0 11.9999 0C11.7347 0 11.4804 0.105357 11.2928 0.292893L7.79277 3.79295C7.40225 4.18348 7.40225 4.81664 7.79277 5.20717C8.1833 5.59769 8.81646 5.59769 9.20698 5.20717L10.9999 3.41421V14C10.9999 14.5523 11.4477 15 11.9999 15C12.5522 15 12.9999 14.5523 12.9999 14V3.41421L14.7929 5.20717C15.1834 5.59769 15.8166 5.59769 16.2071 5.20717C16.5976 4.81664 16.5976 4.18348 16.2071 3.79295L12.707 0.292893Z" fill={color}/>
<path d="M5 7.5H9V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14V7.5H19C20.6569 7.5 22 8.84315 22 10.5V19.5C22 21.1569 20.6569 22.5 19 22.5H5C3.34315 22.5 2 21.1569 2 19.5V10.5C2 8.84315 3.34315 7.5 5 7.5Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowUpFilled;
