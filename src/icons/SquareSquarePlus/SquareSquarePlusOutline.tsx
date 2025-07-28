import React from 'react';

interface SquareSquarePlusOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function SquareSquarePlusOutline({ 
  size = 24,
  ...props
}: SquareSquarePlusOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.5 10C10.0523 10 10.5 10.4477 10.5 11V13.5H13C13.5523 13.5 14 13.9477 14 14.5C14 15.0523 13.5523 15.5 13 15.5H10.5V18C10.5 18.5523 10.0523 19 9.5 19C8.94772 19 8.5 18.5523 8.5 18V15.5H6C5.44772 15.5 5 15.0523 5 14.5C5 13.9477 5.44772 13.5 6 13.5H8.5V11C8.5 10.4477 8.94772 10 9.5 10Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.1543 1.00391C21.7394 1.08421 23 2.39489 23 4V15C23 16.6569 21.6569 18 20 18H18V20C18 21.6569 16.6569 23 15 23H4C2.39489 23 1.08421 21.7394 1.00391 20.1543L1 20V9C1 7.34315 2.34315 6 4 6H6V4C6 2.34315 7.34315 1 9 1H20L20.1543 1.00391ZM4 8C3.44772 8 3 8.44772 3 9V20L3.00488 20.1025C3.05621 20.6067 3.48232 21 4 21H15C15.5523 21 16 20.5523 16 20V9C16 8.48232 15.6067 8.05621 15.1025 8.00488L15 8H4ZM9 3C8.44772 3 8 3.44772 8 4V6H15L15.1543 6.00391C16.7394 6.08421 18 7.39489 18 9V16H20C20.5523 16 21 15.5523 21 15V4C21 3.48232 20.6067 3.05621 20.1025 3.00488L20 3H9Z" fill="currentColor"/>
    </svg>
  );
}

export default SquareSquarePlusOutline;
