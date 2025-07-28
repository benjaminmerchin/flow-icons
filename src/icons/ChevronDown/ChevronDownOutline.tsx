import React from 'react';

interface ChevronDownOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ChevronDownOutline({ 
  size = 24,
  ...props
}: ChevronDownOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M3.29289 7.79289C3.68342 7.40237 4.31658 7.40237 4.70711 7.79289L12 15.0858L19.2929 7.79289C19.6834 7.40237 20.3166 7.40237 20.7071 7.79289C21.0976 8.18342 21.0976 8.81658 20.7071 9.20711L12.7071 17.2071C12.3166 17.5976 11.6834 17.5976 11.2929 17.2071L3.29289 9.20711C2.90237 8.81658 2.90237 8.18342 3.29289 7.79289Z" fill="currentColor"/>
    </svg>
  );
}

export default ChevronDownOutline;
