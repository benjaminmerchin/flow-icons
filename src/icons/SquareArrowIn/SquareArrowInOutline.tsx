import React from 'react';

interface SquareArrowInOutlineProps {
  size?: number | string;
  color?: string;
}

function SquareArrowInOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: SquareArrowInOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 19C7 19.5523 7.44772 20 8 20H18.5C19.0523 20 19.5 19.5523 19.5 19V5C19.5 4.44772 19.0523 4 18.5 4L8 4C7.44772 4 7 4.44772 7 5L7 9.00001H5V5C5 3.34315 6.34315 2 8 2H18.5C20.1569 2 21.5 3.34314 21.5 5V19C21.5 20.6569 20.1569 22 18.5 22H8C6.34315 22 5 20.6569 5 19V15H7L7 19Z" fill={color}/>
<path d="M11.207 7.7929C10.8165 7.40238 10.1834 7.40238 9.79283 7.7929C9.40231 8.18343 9.40231 8.81659 9.79283 9.20711L11.5858 11.0001L1 11.0001C0.447715 11.0001 0 11.4478 0 12.0001C0 12.5524 0.447715 13.0001 1 13.0001L11.5858 13.0001L9.79283 14.793C9.40231 15.1835 9.40231 15.8167 9.79283 16.2072C10.1834 16.5978 10.8165 16.5978 11.207 16.2072L14.7071 12.7072C14.8946 12.5196 15 12.2653 15 12.0001C15 11.7349 14.8946 11.4805 14.7071 11.293L11.207 7.7929Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowInOutline;
