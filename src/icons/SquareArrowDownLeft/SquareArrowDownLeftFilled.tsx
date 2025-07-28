import React from 'react';

interface SquareArrowDownLeftFilledProps {
  size?: number | string;
  color?: string;
}

const SquareArrowDownLeftFilled: React.FC<SquareArrowDownLeftFilledProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM16.682 15.5C17.2343 15.5 17.682 15.0523 17.682 14.5C17.682 13.9477 17.2343 13.5 16.682 13.5H11.9142L19.2071 6.20711C19.5976 5.81658 19.5976 5.18342 19.2071 4.79289C18.8166 4.40237 18.1834 4.40237 17.7929 4.79289L10.5 12.0858V7.31799C10.5 6.7657 10.0523 6.31799 9.50003 6.31799C8.94775 6.31799 8.50003 6.7657 8.50003 7.31799V14.5C8.50003 15.0523 8.94775 15.5 9.50003 15.5H16.682Z" fill={color}/>

    </svg>
  );
};

export default SquareArrowDownLeftFilled;
