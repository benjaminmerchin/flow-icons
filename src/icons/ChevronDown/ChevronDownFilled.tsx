import React from 'react';

interface ChevronDownFilledProps {
  size?: number | string;
  color?: string;
}

function ChevronDownFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: ChevronDownFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.20711 9.29289C6.81658 8.90237 6.18342 8.90237 5.79289 9.29289C5.40237 9.68342 5.40237 10.3166 5.79289 10.7071L11.2929 16.2071C11.4804 16.3946 11.7348 16.5 12 16.5C12.2652 16.5 12.5196 16.3946 12.7071 16.2071L18.2071 10.7071C18.5976 10.3166 18.5976 9.68342 18.2071 9.29289C17.8166 8.90237 17.1834 8.90237 16.7929 9.29289L12 14.0858L7.20711 9.29289Z" fill={color}/>
    </svg>
  );
}

export default ChevronDownFilled;
