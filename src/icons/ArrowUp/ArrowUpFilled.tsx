import React from 'react';

interface ArrowUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ArrowUpFilled({ 
  size = 24,
  ...props
}: ArrowUpFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13 18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5V8.91421L7.70711 12.2071C7.31658 12.5976 6.68342 12.5976 6.29289 12.2071C5.90237 11.8166 5.90237 11.1834 6.29289 10.7929L11.2929 5.79289C11.6834 5.40237 12.3166 5.40237 12.7071 5.79289L17.7071 10.7929C18.0976 11.1834 18.0976 11.8166 17.7071 12.2071C17.3166 12.5976 16.6834 12.5976 16.2929 12.2071L13 8.91421V18.5Z" fill="currentColor"/>
    </svg>
  );
}

export default ArrowUpFilled;
