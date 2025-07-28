import React from 'react';

interface IphoneFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function IphoneFilled({ 
  size = 24,
  ...props
}: IphoneFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V4ZM10.25 4C9.83579 4 9.5 4.33579 9.5 4.75C9.5 5.16421 9.83579 5.5 10.25 5.5H13.75C14.1642 5.5 14.5 5.16421 14.5 4.75C14.5 4.33579 14.1642 4 13.75 4H10.25Z" fill="currentColor"/>
    </svg>
  );
}

export default IphoneFilled;
