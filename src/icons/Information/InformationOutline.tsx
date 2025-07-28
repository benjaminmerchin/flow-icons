import React from 'react';

interface InformationOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function InformationOutline({ 
  size = 24,
  ...props
}: InformationOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.25 7C13.25 7.69036 12.6904 8.25 12 8.25C11.3096 8.25 10.75 7.69036 10.75 7C10.75 6.30964 11.3096 5.75 12 5.75C12.6904 5.75 13.25 6.30964 13.25 7Z" fill="currentColor"/>
<path d="M9.75 16C9.19771 16 8.75 16.4477 8.75 17C8.75 17.5523 9.19771 18 9.75 18H14.75C15.3023 18 15.75 17.5523 15.75 17C15.75 16.4477 15.3023 16 14.75 16H13.25V10.5C13.25 9.94771 12.8023 9.5 12.25 9.5H10C9.44771 9.5 9 9.94771 9 10.5C9 11.0523 9.44771 11.5 10 11.5H11.25V16H9.75Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor"/>
    </svg>
  );
}

export default InformationOutline;
