import React from 'react';

interface ArrowRightOutlineProps {
  size?: number | string;
  color?: string;
}

function ArrowRightOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: ArrowRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M13.2929 4.79289C13.6834 4.40237 14.3166 4.40237 14.7071 4.79289L21.2071 11.2929C21.5976 11.6834 21.5976 12.3166 21.2071 12.7071L14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071C12.9024 18.8166 12.9024 18.1834 13.2929 17.7929L18.0858 13H3.5C2.94772 13 2.5 12.5523 2.5 12C2.5 11.4477 2.94772 11 3.5 11H18.0858L13.2929 6.20711C12.9024 5.81658 12.9024 5.18342 13.2929 4.79289Z" fill={color}/>
    </svg>
  );
}

export default ArrowRightOutline;
