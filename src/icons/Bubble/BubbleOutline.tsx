import React from 'react';

interface BubbleOutlineProps {
  size?: number | string;
  color?: string;
}

function BubbleOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: BubbleOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1 6.5C1 4.29086 2.79086 2.5 5 2.5H19C21.2091 2.5 23 4.29086 23 6.5V14.5C23 16.7091 21.2091 18.5 19 18.5H13.3802L9.16436 22.2474C8.87004 22.509 8.44958 22.5736 8.09034 22.4122C7.73111 22.2509 7.5 21.8938 7.5 21.5V18.5H5C2.79086 18.5 1 16.7091 1 14.5V6.5ZM5 4.5C3.89543 4.5 3 5.39543 3 6.5V14.5C3 15.6046 3.89543 16.5 5 16.5H8.5C9.05228 16.5 9.5 16.9477 9.5 17.5V19.2732L12.3356 16.7526C12.5187 16.5899 12.7551 16.5 13 16.5H19C20.1046 16.5 21 15.6046 21 14.5V6.5C21 5.39543 20.1046 4.5 19 4.5H5Z" fill={color}/>
    </svg>
  );
}

export default BubbleOutline;
