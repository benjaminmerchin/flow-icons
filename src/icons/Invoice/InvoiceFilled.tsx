import React from 'react';

interface InvoiceFilledProps {
  size?: number | string;
  color?: string;
}

function InvoiceFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: InvoiceFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M9 2C7.34315 2 6 3.34315 6 5V18.75C6 20.196 5.05562 21.4215 3.74999 21.8433C4.06502 21.945 4.40109 22 4.75 22H18.5C20.1569 22 21.5 20.6569 21.5 19V5C21.5 3.34315 20.1569 2 18.5 2H9ZM10.5 6C9.94771 6 9.5 6.44772 9.5 7C9.5 7.55228 9.94771 8 10.5 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H10.5ZM10.5 10C9.94771 10 9.5 10.4477 9.5 11C9.5 11.5523 9.94771 12 10.5 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H10.5ZM11.5 18C12.6046 18 13.5 17.1046 13.5 16C13.5 14.8954 12.6046 14 11.5 14C10.3954 14 9.5 14.8954 9.5 16C9.5 17.1046 10.3954 18 11.5 18Z" fill={color}/>
<path d="M3.80435 10H4V18.75C4 19.4404 3.44036 20 2.75 20C2.05964 20 1.5 19.4404 1.5 18.75V12.3043C1.5 11.0317 2.53169 10 3.80435 10Z" fill={color}/>
    </svg>
  );
}

export default InvoiceFilled;
