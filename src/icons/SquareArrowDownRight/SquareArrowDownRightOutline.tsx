import React from 'react';

interface SquareArrowDownRightOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function SquareArrowDownRightOutline({ 
  size = 24,
  ...props
}: SquareArrowDownRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.81796 16C7.26568 16 6.81796 15.5523 6.81796 15C6.81796 14.4477 7.26568 14 7.81796 14H12.5858L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L14 12.5858V7.81799C14 7.2657 14.4477 6.81799 15 6.81799C15.5523 6.81799 16 7.2657 16 7.81799V15C16 15.5523 15.5523 16 15 16H7.81796Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4Z" fill="currentColor"/>
    </svg>
  );
}

export default SquareArrowDownRightOutline;
