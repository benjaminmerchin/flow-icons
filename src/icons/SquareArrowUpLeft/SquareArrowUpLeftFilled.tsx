import React from 'react';

interface SquareArrowUpLeftFilledProps {
  size?: number | string;
  color?: string;
}

const SquareArrowUpLeftFilled: React.FC<SquareArrowUpLeftFilledProps> = ({ 
  size = 24, 
  color = "#1A1A1A" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM16.682 8.5C17.2343 8.5 17.682 8.94772 17.682 9.5C17.682 10.0523 17.2343 10.5 16.682 10.5H11.9142L19.2071 17.7929C19.5976 18.1834 19.5976 18.8166 19.2071 19.2071C18.8166 19.5976 18.1834 19.5976 17.7929 19.2071L10.5 11.9142V16.682C10.5 17.2343 10.0523 17.682 9.5 17.682C8.94771 17.682 8.5 17.2343 8.5 16.682V9.5C8.5 8.94772 8.94771 8.5 9.5 8.5H16.682Z" fill={color}/>

    </svg>
  );
};

export default SquareArrowUpLeftFilled;
