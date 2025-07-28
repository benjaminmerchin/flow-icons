import React from 'react';

interface CheckOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function CheckOutline({ 
  size = 24,
  ...props
}: CheckOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M20.0547 3.66793C20.5143 3.97429 20.6384 4.59516 20.3321 5.05468L11.3321 18.5547C11.1551 18.8201 10.8621 18.9852 10.5434 18.999C10.2247 19.0129 9.91846 18.8738 9.71917 18.6247L3.71917 11.1247C3.37416 10.6934 3.44408 10.0641 3.87534 9.71912C4.3066 9.37411 4.9359 9.44403 5.28091 9.87529L10.4266 16.3074L18.668 3.94528C18.9743 3.48576 19.5952 3.36158 20.0547 3.66793Z" fill="currentColor"/>
    </svg>
  );
}

export default CheckOutline;
