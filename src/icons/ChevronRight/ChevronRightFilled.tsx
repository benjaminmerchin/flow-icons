import React from 'react';

interface ChevronRightFilledProps {
  size?: number | string;
  color?: string;
}

function ChevronRightFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: ChevronRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.7071 5.79289C10.3166 5.40237 9.68342 5.40237 9.29289 5.79289C8.90237 6.18342 8.90237 6.81658 9.29289 7.20711L14.0858 12L9.29289 16.7929C8.90237 17.1834 8.90237 17.8166 9.29289 18.2071C9.68342 18.5976 10.3166 18.5976 10.7071 18.2071L16.2071 12.7071C16.5976 12.3166 16.5976 11.6834 16.2071 11.2929L10.7071 5.79289Z" fill={color}/>
    </svg>
  );
}

export default ChevronRightFilled;
