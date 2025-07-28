import React from 'react';

interface ArrowUpLeftFilledProps {
  size?: number | string;
  color?: string;
}

function ArrowUpLeftFilled({ 
  size = 24, 
  color = "currentColor" 
}: ArrowUpLeftFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM14.8284 6.75736C15.3807 6.75736 15.8284 7.20507 15.8284 7.75736C15.8284 8.30964 15.3807 8.75736 14.8284 8.75736H10.1715L16.9497 15.5355C17.3402 15.9261 17.3402 16.5592 16.9497 16.9497C16.5592 17.3403 15.926 17.3403 15.5355 16.9497L8.75733 10.1716V14.8284C8.75733 15.3807 8.30962 15.8284 7.75733 15.8284C7.20505 15.8284 6.75733 15.3807 6.75733 14.8284V7.75736C6.75733 7.20507 7.20505 6.75736 7.75733 6.75736H14.8284Z" fill={color}/>
    </svg>
  );
}

export default ArrowUpLeftFilled;
