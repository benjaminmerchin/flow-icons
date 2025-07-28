import React from 'react';

interface ArrowDownFilledProps {
  size?: number | string;
  color?: string;
}

function ArrowDownFilled({ 
  size = 24, 
  color = "currentColor" 
}: ArrowDownFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13 5.5C13 4.94772 12.5523 4.5 12 4.5C11.4477 4.5 11 4.94772 11 5.5V15.0858L7.70711 11.7929C7.31658 11.4024 6.68342 11.4024 6.29289 11.7929C5.90237 12.1834 5.90237 12.8166 6.29289 13.2071L11.2929 18.2071C11.6834 18.5976 12.3166 18.5976 12.7071 18.2071L17.7071 13.2071C18.0976 12.8166 18.0976 12.1834 17.7071 11.7929C17.3166 11.4024 16.6834 11.4024 16.2929 11.7929L13 15.0858V5.5Z" fill={color}/>
    </svg>
  );
}

export default ArrowDownFilled;
