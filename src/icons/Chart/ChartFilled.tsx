import React from 'react';

interface ChartFilledProps {
  size?: number | string;
  color?: string;
}

function ChartFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: ChartFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 3C3 2.44772 2.55228 2 2 2C1.44772 2 1 2.44772 1 3V20C1 21.1046 1.89543 22 3 22H22C22.5523 22 23 21.5523 23 21C23 20.4477 22.5523 20 22 20H3V3Z" fill={color}/>
<path d="M22 6.5V18H5V11.7996L6.21686 10.4892C7.44678 9.16463 9.48296 8.9945 10.9156 10.0965L13.6038 12.1644C14.2661 12.6739 15.2171 12.5439 15.7184 11.8755L20.2 5.9C20.4583 5.55566 20.9079 5.41521 21.3162 5.55132C21.7246 5.68743 22 6.06957 22 6.5Z" fill={color}/>
    </svg>
  );
}

export default ChartFilled;
