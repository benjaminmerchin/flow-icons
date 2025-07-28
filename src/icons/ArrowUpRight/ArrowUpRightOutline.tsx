import React from 'react';

interface ArrowUpRightOutlineProps {
  size?: number | string;
  color?: string;
}

function ArrowUpRightOutline({ 
  size = 24, 
  color = "currentColor" 
}: ArrowUpRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M7.81799 6C7.81799 5.44772 8.26571 5 8.81799 5H18C18.5523 5 19 5.44772 19 6V15.182C19 15.7343 18.5523 16.182 18 16.182C17.4477 16.182 17 15.7343 17 15.182V8.41421L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L15.5858 7H8.81799C8.26571 7 7.81799 6.55228 7.81799 6Z" fill={color}/>
    </svg>
  );
}

export default ArrowUpRightOutline;
