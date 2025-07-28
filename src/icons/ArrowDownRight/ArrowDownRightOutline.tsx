import React from 'react';

interface ArrowDownRightOutlineProps {
  size?: number | string;
  color?: string;
}

const ArrowDownRightOutline: React.FC<ArrowDownRightOutlineProps> = ({ 
  size = 24, 
  color = "#1A1A1A" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.81799 18C7.81799 18.5523 8.26571 19 8.81799 19H18C18.5523 19 19 18.5523 19 18V8.81802C19 8.26573 18.5523 7.81802 18 7.81802C17.4477 7.81802 17 8.26573 17 8.81802V15.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L15.5858 17H8.81799C8.26571 17 7.81799 17.4477 7.81799 18Z" fill={color}/>

    </svg>
  );
};

export default ArrowDownRightOutline;
