import React from 'react';

interface InvoiceOutlineProps {
  size?: number | string;
  color?: string;
}

function InvoiceOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: InvoiceOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H17C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6H11Z" fill={color}/>
<path d="M10 11C10 10.4477 10.4477 10 11 10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H11C10.4477 12 10 11.5523 10 11Z" fill={color}/>
<path d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z" fill={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M6 5C6 3.34315 7.34315 2 9 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H4.75C2.95507 22 1.5 20.5449 1.5 18.75V12.3043C1.5 11.0317 2.53169 10 3.80435 10H6V5ZM19 20H7.75092C7.91138 19.6152 8 19.193 8 18.75V5C8 4.44772 8.44772 4 9 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20ZM3.80435 12L6 12V18.75C6 19.4404 5.44036 20 4.75 20C4.05964 20 3.5 19.4404 3.5 18.75V12.3043C3.5 12.1363 3.63626 12 3.80435 12Z" fill={color}/>
    </svg>
  );
}

export default InvoiceOutline;
