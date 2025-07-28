import React from 'react';

interface SubtractSquareFilledProps {
  size?: number | string;
  color?: string;
}

const SubtractSquareFilled: React.FC<SubtractSquareFilledProps> = ({ 
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
      
<path d="M15.1543 1.00391C16.7394 1.08421 18 2.39489 18 4V6H20L20.1543 6.00391C21.7394 6.08421 23 7.39489 23 9V13.5859L18 8.58594V11.4141L23 16.4141V20C23 20.4626 22.8911 20.8988 22.7041 21.29L17.7041 16.29C17.4083 16.9089 16.9089 17.4083 16.29 17.7041L21.29 22.7041C20.8988 22.8911 20.4626 23 20 23H16.4141L11.4141 18H8.58594L13.5859 23H9C7.3949 23 6.08421 21.7394 6.00391 20.1543L6 20V18H4C2.39489 18 1.08421 16.7394 1.00391 15.1543L1 15V4C1 2.34315 2.34315 1 4 1H15L15.1543 1.00391Z" fill={color}/>

    </svg>
  );
};

export default SubtractSquareFilled;
