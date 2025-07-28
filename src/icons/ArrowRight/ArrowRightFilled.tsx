import React from 'react';

interface ArrowRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ArrowRightFilled({ 
  size = 24,
  ...props
}: ArrowRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM13.2071 6.29289C12.8166 5.90237 12.1834 5.90237 11.7929 6.29289C11.4024 6.68342 11.4024 7.31658 11.7929 7.70711L15.0858 11H5.5C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13H15.0858L11.7929 16.2929C11.4024 16.6834 11.4024 17.3166 11.7929 17.7071C12.1834 18.0976 12.8166 18.0976 13.2071 17.7071L18.2071 12.7071C18.5976 12.3166 18.5976 11.6834 18.2071 11.2929L13.2071 6.29289Z" fill="currentColor"/>
    </svg>
  );
}

export default ArrowRightFilled;
