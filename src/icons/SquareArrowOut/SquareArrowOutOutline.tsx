import React from 'react';

interface SquareArrowOutOutlineProps {
  size?: number | string;
  color?: string;
}

function SquareArrowOutOutline({ 
  size = 24, 
  color = "currentColor" 
}: SquareArrowOutOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 4C3.94772 4 3.5 4.44772 3.5 5L3.5 19C3.5 19.5523 3.94772 20 4.5 20H13.5C14.0523 20 14.5 19.5523 14.5 19V15H16.5V19C16.5 20.6569 15.1569 22 13.5 22H4.5C2.84315 22 1.5 20.6569 1.5 19V5C1.5 3.34315 2.84315 2 4.5 2H13.5C15.1569 2 16.5 3.34315 16.5 5V9H14.5V5C14.5 4.44772 14.0523 4 13.5 4L4.5 4Z" fill={color}/>
<path d="M20.207 7.79289C19.8165 7.40237 19.1834 7.40237 18.7928 7.79289C18.4023 8.18342 18.4023 8.81658 18.7928 9.20711L20.5858 11.0001L10 11.0001C9.44772 11.0001 9 11.4478 9 12.0001C9 12.5523 9.44772 13.0001 10 13.0001L20.5858 13.0001L18.7928 14.793C18.4023 15.1835 18.4023 15.8167 18.7928 16.2072C19.1834 16.5978 19.8165 16.5978 20.207 16.2072L23.7071 12.7072C23.8946 12.5196 24 12.2653 24 12.0001C24 11.7348 23.8946 11.4805 23.7071 11.293L20.207 7.79289Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowOutOutline;
