import React from 'react';

interface ChevronUpDownOutlineProps {
  size?: number | string;
  color?: string;
}

function ChevronUpDownOutline({ 
  size = 24, 
  color = "currentColor" 
}: ChevronUpDownOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.7071 2.79289C12.3166 2.40237 11.6834 2.40237 11.2929 2.79289L5.29289 8.79289C4.90237 9.18342 4.90237 9.81658 5.29289 10.2071C5.68342 10.5976 6.31658 10.5976 6.70711 10.2071L12 4.91421L17.2929 10.2071C17.6834 10.5976 18.3166 10.5976 18.7071 10.2071C19.0976 9.81658 19.0976 9.18342 18.7071 8.79289L12.7071 2.79289Z" fill={color}/>
<path d="M18.7071 15.2071L12.7071 21.2071C12.3166 21.5976 11.6834 21.5976 11.2929 21.2071L5.29289 15.2071C4.90237 14.8166 4.90237 14.1834 5.29289 13.7929C5.68342 13.4024 6.31658 13.4024 6.70711 13.7929L12 19.0858L17.2929 13.7929C17.6834 13.4024 18.3166 13.4024 18.7071 13.7929C19.0976 14.1834 19.0976 14.8166 18.7071 15.2071Z" fill={color}/>
    </svg>
  );
}

export default ChevronUpDownOutline;
