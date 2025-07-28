import React from 'react';

interface ArrowUpOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ArrowUpOutline({ 
  size = 24,
  ...props
}: ArrowUpOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.5C12.2652 2.5 12.5196 2.60536 12.7071 2.79289L19.2071 9.29289C19.5976 9.68342 19.5976 10.3166 19.2071 10.7071C18.8166 11.0976 18.1834 11.0976 17.7929 10.7071L13 5.91421L13 20.5C13 21.0523 12.5523 21.5 12 21.5C11.4477 21.5 11 21.0523 11 20.5L11 5.91421L6.20711 10.7071C5.81658 11.0976 5.18342 11.0976 4.79289 10.7071C4.40237 10.3166 4.40237 9.68342 4.79289 9.29289L11.2929 2.79289C11.4804 2.60536 11.7348 2.5 12 2.5Z" fill="currentColor"/>
    </svg>
  );
}

export default ArrowUpOutline;
