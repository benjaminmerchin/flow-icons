import React from 'react';

interface ChartOutlineProps {
  size?: number | string;
  color?: string;
}

function ChartOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: ChartOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 3C3 2.44772 2.55228 2 2 2C1.44772 2 1 2.44772 1 3V20C1 21.1046 1.89543 22 3 22H22C22.5523 22 23 21.5523 23 21C23 20.4477 22.5523 20 22 20H3V16.8927L7.68246 11.85C8.20956 11.2824 9.08221 11.2095 9.69621 11.6818L12.3844 13.7496C13.9298 14.9384 16.1486 14.6352 17.3184 13.0755L21.8 7.1C22.1314 6.65817 22.0418 6.03137 21.6 5.7C21.1582 5.36863 20.5314 5.45817 20.2 5.9L15.7184 11.8755C15.2171 12.5439 14.2661 12.6739 13.6038 12.1644L10.9156 10.0965C9.48297 8.99449 7.44678 9.16462 6.21687 10.4891L3 13.9535V3Z" fill={color}/>
    </svg>
  );
}

export default ChartOutline;
