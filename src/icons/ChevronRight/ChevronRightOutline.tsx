import React from 'react';

interface ChevronRightOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ChevronRightOutline({ 
  size = 24,
  ...props
}: ChevronRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M7.79289 3.29289C8.18342 2.90237 8.81658 2.90237 9.20711 3.29289L17.2071 11.2929C17.5976 11.6834 17.5976 12.3166 17.2071 12.7071L9.20711 20.7071C8.81658 21.0976 8.18342 21.0976 7.79289 20.7071C7.40237 20.3166 7.40237 19.6834 7.79289 19.2929L15.0858 12L7.79289 4.70711C7.40237 4.31658 7.40237 3.68342 7.79289 3.29289Z" fill="currentColor"/>
    </svg>
  );
}

export default ChevronRightOutline;
