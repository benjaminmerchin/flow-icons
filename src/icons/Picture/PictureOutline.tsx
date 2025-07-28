import React from 'react';

interface PictureOutlineProps {
  size?: number | string;
  color?: string;
}

function PictureOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: PictureOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.25 11C18.2165 11 19 10.2165 19 9.25C19 8.2835 18.2165 7.5 17.25 7.5C16.2835 7.5 15.5 8.2835 15.5 9.25C15.5 10.2165 16.2835 11 17.25 11Z" fill={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M1 6.5C1 4.84315 2.34315 3.5 4 3.5H20C21.6569 3.5 23 4.84315 23 6.5V17.5C23 19.1569 21.6569 20.5 20 20.5H4C2.34315 20.5 1 19.1569 1 17.5V6.5ZM4 5.5C3.44772 5.5 3 5.94772 3 6.5V15.2692L6.97901 10.372C7.76914 9.39952 9.24865 9.38477 10.058 10.3413L14 15L15.7454 13.5455C16.4756 12.937 17.5331 12.9264 18.2752 13.5202L21 15.7V6.5C21 5.94772 20.5523 5.5 20 5.5H4Z" fill={color}/>
    </svg>
  );
}

export default PictureOutline;
