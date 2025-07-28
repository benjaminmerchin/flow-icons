import React from 'react';

interface EnveloppeFilledProps {
  size?: number | string;
  color?: string;
}

function EnveloppeFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: EnveloppeFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.87869 13.7929L9.50001 13.4142L2.96805 19.9462C3.56356 20.2981 4.2582 20.5 5 20.5H19C19.7418 20.5 20.4365 20.2981 21.032 19.9462L14.5 13.4142L14.1213 13.7929C12.9498 14.9645 11.0503 14.9645 9.87869 13.7929Z" fill={color}/>
<path d="M22.4462 18.532C22.7981 17.9365 23 17.2418 23 16.5V7.5C23 6.7582 22.7981 6.06356 22.4462 5.46805L15.9142 12L22.4462 18.532Z" fill={color}/>
<path d="M21.032 4.05383L12.7071 12.3787C12.3166 12.7692 11.6834 12.7692 11.2929 12.3787L2.96803 4.05382C3.56355 3.70193 4.25819 3.5 5 3.5H19C19.7418 3.5 20.4365 3.70193 21.032 4.05383Z" fill={color}/>
<path d="M1.55382 5.46803C1.20193 6.06355 1 6.75819 1 7.5V16.5C1 17.2418 1.20193 17.9365 1.55383 18.532L8.0858 12L1.55382 5.46803Z" fill={color}/>
    </svg>
  );
}

export default EnveloppeFilled;
