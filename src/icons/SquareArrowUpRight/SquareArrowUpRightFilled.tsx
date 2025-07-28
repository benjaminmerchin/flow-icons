import React from 'react';

interface SquareArrowUpRightFilledProps {
  size?: number | string;
  color?: string;
}

function SquareArrowUpRightFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: SquareArrowUpRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM7.31796 8.5C6.76568 8.5 6.31796 8.94772 6.31796 9.5C6.31796 10.0523 6.76568 10.5 7.31796 10.5H12.0858L4.79289 17.7929C4.40237 18.1834 4.40237 18.8166 4.79289 19.2071C5.18342 19.5976 5.81658 19.5976 6.20711 19.2071L13.5 11.9142V16.682C13.5 17.2343 13.9477 17.682 14.5 17.682C15.0523 17.682 15.5 17.2343 15.5 16.682V9.5C15.5 8.94772 15.0523 8.5 14.5 8.5H7.31796Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowUpRightFilled;
