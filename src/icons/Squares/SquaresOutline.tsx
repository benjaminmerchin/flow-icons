import React from 'react';

interface SquaresOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function SquaresOutline({ 
  size = 24,
  ...props
}: SquaresOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 3C13.6716 3 13 3.67157 13 4.5V9.5C13 10.3284 13.6716 11 14.5 11H19.5C20.3284 11 21 10.3284 21 9.5V4.5C21 3.67157 20.3284 3 19.5 3H14.5ZM15 9V5H19V9H15Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.5 13C3.67157 13 3 13.6716 3 14.5V19.5C3 20.3284 3.67157 21 4.5 21H9.5C10.3284 21 11 20.3284 11 19.5V14.5C11 13.6716 10.3284 13 9.5 13H4.5ZM5 19V15H9V19H5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3 4.5C3 3.67157 3.67157 3 4.5 3H9.5C10.3284 3 11 3.67157 11 4.5V9.5C11 10.3284 10.3284 11 9.5 11H4.5C3.67157 11 3 10.3284 3 9.5V4.5ZM5 5V9H9V5H5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M14.5 13C13.6716 13 13 13.6716 13 14.5V19.5C13 20.3284 13.6716 21 14.5 21H19.5C20.3284 21 21 20.3284 21 19.5V14.5C21 13.6716 20.3284 13 19.5 13H14.5ZM15 19V15H19V19H15Z" fill="currentColor"/>
    </svg>
  );
}

export default SquaresOutline;
