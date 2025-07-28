import React from 'react';

interface CircleArrowUpRightOutlineProps {
  size?: number | string;
  color?: string;
}

function CircleArrowUpRightOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: CircleArrowUpRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C10.0525 23 8.22324 22.4939 6.63651 21.6061L8.11972 20.1229C9.29463 20.6851 10.6105 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.3894 3.31485 14.7053 3.8771 15.8802L2.39389 17.3634C1.50608 15.7767 1 13.9474 1 12Z" fill={color}/>
<path d="M8 8C7.44772 8 7 8.44772 7 9C7 9.55229 7.44772 10 8 10H12.5858L2.79283 19.7929C2.40231 20.1834 2.40231 20.8166 2.79283 21.2071C3.18336 21.5976 3.81652 21.5976 4.20704 21.2071L14 11.4142V16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16V9C16 8.44772 15.5523 8 15 8H8Z" fill={color}/>
    </svg>
  );
}

export default CircleArrowUpRightOutline;
