import React from 'react';

interface BubbleFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function BubbleFilled({ 
  size = 24,
  ...props
}: BubbleFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 2.5C2.79086 2.5 1 4.29086 1 6.5V14.5C1 16.7091 2.79086 18.5 5 18.5H7.5V21.5C7.5 21.8938 7.73111 22.2509 8.09034 22.4122C8.44958 22.5736 8.87004 22.509 9.16436 22.2474L13.3802 18.5H19C21.2091 18.5 23 16.7091 23 14.5V6.5C23 4.29086 21.2091 2.5 19 2.5H5Z" fill="currentColor"/>
    </svg>
  );
}

export default BubbleFilled;
