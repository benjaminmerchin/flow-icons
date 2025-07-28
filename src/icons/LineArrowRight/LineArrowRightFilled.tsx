import React from 'react';

interface LineArrowRightFilledProps {
  size?: number | string;
  color?: string;
}

function LineArrowRightFilled({ 
  size = 24, 
  color = "currentColor" 
}: LineArrowRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM6 6.5C6.55228 6.5 7 6.94772 7 7.5V16.5C7 17.0523 6.55228 17.5 6 17.5C5.44772 17.5 5 17.0523 5 16.5V7.5C5 6.94772 5.44772 6.5 6 6.5ZM13.7929 6.79289C14.1834 6.40237 14.8166 6.40237 15.2071 6.79289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.2071 17.2071C14.8166 17.5976 14.1834 17.5976 13.7929 17.2071C13.4024 16.8166 13.4024 16.1834 13.7929 15.7929L16.5858 13H9.5C8.94772 13 8.5 12.5523 8.5 12C8.5 11.4477 8.94772 11 9.5 11H16.5858L13.7929 8.20711C13.4024 7.81658 13.4024 7.18342 13.7929 6.79289Z" fill={color}/>
    </svg>
  );
}

export default LineArrowRightFilled;
