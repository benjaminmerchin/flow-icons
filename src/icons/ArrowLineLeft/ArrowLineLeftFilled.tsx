import React from 'react';

interface ArrowLineLeftFilledProps {
  size?: number | string;
  color?: string;
}

function ArrowLineLeftFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: ArrowLineLeftFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM6.5 6.5C7.05228 6.5 7.5 6.94772 7.5 7.5V16.5C7.5 17.0523 7.05228 17.5 6.5 17.5C5.94772 17.5 5.5 17.0523 5.5 16.5V7.5C5.5 6.94772 5.94772 6.5 6.5 6.5ZM15.2071 8.20711L12.4142 11H19.5C20.0523 11 20.5 11.4477 20.5 12C20.5 12.5523 20.0523 13 19.5 13H12.4142L15.2071 15.7929C15.5976 16.1834 15.5976 16.8166 15.2071 17.2071C14.8166 17.5976 14.1834 17.5976 13.7929 17.2071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L13.7929 6.79289C14.1834 6.40237 14.8166 6.40237 15.2071 6.79289C15.5976 7.18342 15.5976 7.81658 15.2071 8.20711Z" fill={color}/>
    </svg>
  );
}

export default ArrowLineLeftFilled;
