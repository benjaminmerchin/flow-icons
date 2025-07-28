import React from 'react';

interface CreditCardFilledProps {
  size?: number | string;
  color?: string;
}

function CreditCardFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: CreditCardFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 3.5C2.34315 3.5 1 4.84315 1 6.5V8.5H23V6.5C23 4.84315 21.6569 3.5 20 3.5H4Z" fill={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M1 17.5V10.5H23V17.5C23 19.1569 21.6569 20.5 20 20.5H4C2.34315 20.5 1 19.1569 1 17.5ZM16 14C15.1716 14 14.5 14.6716 14.5 15.5C14.5 16.3284 15.1716 17 16 17H18C18.8284 17 19.5 16.3284 19.5 15.5C19.5 14.6716 18.8284 14 18 14H16Z" fill={color}/>
    </svg>
  );
}

export default CreditCardFilled;
