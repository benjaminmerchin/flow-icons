import React from 'react';

interface BarsFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function BarsFilled({ 
  size = 24,
  ...props
}: BarsFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11.25 2C10.1454 2 9.25 2.89543 9.25 4V17C9.25 17.5523 9.69771 18 10.25 18H13.75C14.3023 18 14.75 17.5523 14.75 17V4C14.75 2.89543 13.8546 2 12.75 2H11.25Z" fill="currentColor"/>
<path d="M3.75 6C2.64543 6 1.75 6.89543 1.75 8V17C1.75 17.5523 2.19772 18 2.75 18H6.25C6.80228 18 7.25 17.5523 7.25 17V8C7.25 6.89543 6.35457 6 5.25 6H3.75Z" fill="currentColor"/>
<path d="M23.5 20.5C23.5 21.0523 23.0523 21.5 22.5 21.5L1.5 21.5C0.947716 21.5 0.5 21.0523 0.5 20.5C0.5 19.9477 0.947716 19.5 1.5 19.5L22.5 19.5C23.0523 19.5 23.5 19.9477 23.5 20.5Z" fill="currentColor"/>
<path d="M18.75 8C17.6454 8 16.75 8.89543 16.75 10V17C16.75 17.5523 17.1977 18 17.75 18H21.25C21.8023 18 22.25 17.5523 22.25 17V10C22.25 8.89543 21.3546 8 20.25 8H18.75Z" fill="currentColor"/>
    </svg>
  );
}

export default BarsFilled;
