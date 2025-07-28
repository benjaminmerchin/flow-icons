import React from 'react';

interface FileOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function FileOutline({ 
  size = 24,
  ...props
}: FileOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V9.82843C21 9.03278 20.6839 8.26972 20.1213 7.70711L14.2929 1.87868C13.7303 1.31607 12.9672 1 12.1716 1H6ZM5 4C5 3.44772 5.44772 3 6 3H11V8C11 9.65685 12.3431 11 14 11H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM18.5858 9L13 3.41421V8C13 8.55228 13.4477 9 14 9H18.5858Z" fill="currentColor"/>
    </svg>
  );
}

export default FileOutline;
