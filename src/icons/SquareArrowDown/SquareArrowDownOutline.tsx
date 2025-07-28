import React from 'react';

interface SquareArrowDownOutlineProps {
  size?: number | string;
  color?: string;
}

function SquareArrowDownOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: SquareArrowDownOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.707 14.7071C12.5195 14.8946 12.2652 15 11.9999 15C11.7347 15 11.4804 14.8946 11.2928 14.7071L7.79277 11.207C7.40225 10.8165 7.40225 10.1834 7.79277 9.79283C8.1833 9.40231 8.81646 9.40231 9.20698 9.79283L10.9999 11.5858V1C10.9999 0.447716 11.4477 0 11.9999 0C12.5522 0 12.9999 0.447715 12.9999 1V11.5858L14.7929 9.79283C15.1834 9.40231 15.8166 9.40231 16.2071 9.79283C16.5976 10.1834 16.5976 10.8165 16.2071 11.207L12.707 14.7071Z" fill={color}/>
<path d="M5 5H9V7H5C4.44772 7 4 7.44772 4 8V18.5C4 19.0523 4.44772 19.5 5 19.5H19C19.5523 19.5 20 19.0523 20 18.5V8C20 7.44772 19.5523 7 19 7H15V5H19C20.6569 5 22 6.34315 22 8V18.5C22 20.1569 20.6569 21.5 19 21.5H5C3.34315 21.5 2 20.1569 2 18.5V8C2 6.34315 3.34315 5 5 5Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowDownOutline;
