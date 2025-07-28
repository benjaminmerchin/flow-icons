import React from 'react';

interface CircleArrowUpRightFilledProps {
  size?: number | string;
  color?: string;
}

function CircleArrowUpRightFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: CircleArrowUpRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1C5.92487 1 1 5.92487 1 12C1 13.9474 1.50608 15.7767 2.39389 17.3634L7.76628 11.991C6.21866 11.8718 5 10.5782 5 9C5 7.34315 6.34315 6 8 6H15C16.6568 6 18 7.34315 18 9V16C18 17.6569 16.6568 19 15 19C13.4217 19 12.1282 17.7813 12.0089 16.2337L6.63651 21.6061C8.22324 22.4939 10.0525 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z" fill={color}/>
<path d="M8 8C7.44772 8 7 8.44772 7 9C7 9.55229 7.44772 10 8 10H12.5858L2.79283 19.7929C2.40231 20.1834 2.40231 20.8166 2.79283 21.2071C3.18336 21.5976 3.81652 21.5976 4.20704 21.2071L14 11.4142V16C14 16.5523 14.4477 17 15 17C15.5523 17 16 16.5523 16 16V9C16 8.44772 15.5523 8 15 8H8Z" fill={color}/>
    </svg>
  );
}

export default CircleArrowUpRightFilled;
