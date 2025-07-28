import React from 'react';

interface ArrowLeftOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ArrowLeftOutline({ 
  size = 24,
  ...props
}: ArrowLeftOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7071 4.79289C11.0976 5.18342 11.0976 5.81658 10.7071 6.20711L5.91421 11H20.5C21.0523 11 21.5 11.4477 21.5 12C21.5 12.5523 21.0523 13 20.5 13H5.91421L10.7071 17.7929C11.0976 18.1834 11.0976 18.8166 10.7071 19.2071C10.3166 19.5976 9.68342 19.5976 9.29289 19.2071L2.79289 12.7071C2.40237 12.3166 2.40237 11.6834 2.79289 11.2929L9.29289 4.79289C9.68342 4.40237 10.3166 4.40237 10.7071 4.79289Z" fill="currentColor"/>
    </svg>
  );
}

export default ArrowLeftOutline;
