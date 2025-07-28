import React from 'react';

interface SquareArrowDownRightFilledProps {
  size?: number | string;
  color?: string;
}

function SquareArrowDownRightFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: SquareArrowDownRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM7.31796 15.5C6.76568 15.5 6.31796 15.0523 6.31796 14.5C6.31796 13.9477 6.76568 13.5 7.31796 13.5H12.0858L4.79289 6.20711C4.40237 5.81658 4.40237 5.18342 4.79289 4.79289C5.18342 4.40237 5.81658 4.40237 6.20711 4.79289L13.5 12.0858V7.31799C13.5 6.7657 13.9477 6.31799 14.5 6.31799C15.0523 6.31799 15.5 6.7657 15.5 7.31799V14.5C15.5 15.0523 15.0523 15.5 14.5 15.5H7.31796Z" fill={color}/>
    </svg>
  );
}

export default SquareArrowDownRightFilled;
