import React from 'react';

interface AlertCircleOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function AlertCircleOutline({ 
  size = 24,
  ...props
}: AlertCircleOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 15.75C12.6904 15.75 13.25 16.3096 13.25 17C13.25 17.6904 12.6904 18.25 12 18.25C11.3096 18.25 10.75 17.6904 10.75 17C10.75 16.3096 11.3096 15.75 12 15.75Z" fill="currentColor"/>
<path d="M12 6C12.5523 6 13 6.44772 13 7V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="currentColor"/>
    </svg>
  );
}

export default AlertCircleOutline;
