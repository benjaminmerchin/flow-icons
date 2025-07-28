import React from 'react';

interface ChevronLeftFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ChevronLeftFilled({ 
  size = 24,
  ...props
}: ChevronLeftFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM14.7071 7.20711C15.0976 6.81658 15.0976 6.18342 14.7071 5.79289C14.3166 5.40237 13.6834 5.40237 13.2929 5.79289L7.79289 11.2929C7.40237 11.6834 7.40237 12.3166 7.79289 12.7071L13.2929 18.2071C13.6834 18.5976 14.3166 18.5976 14.7071 18.2071C15.0976 17.8166 15.0976 17.1834 14.7071 16.7929L9.91421 12L14.7071 7.20711Z" fill="currentColor"/>
    </svg>
  );
}

export default ChevronLeftFilled;
