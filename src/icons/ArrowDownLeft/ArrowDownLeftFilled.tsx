import React from 'react';

interface ArrowDownLeftFilledProps {
  size?: number | string;
  color?: string;
}

const ArrowDownLeftFilled: React.FC<ArrowDownLeftFilledProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM14.8284 17.2426C15.3807 17.2426 15.8284 16.7949 15.8284 16.2426C15.8284 15.6904 15.3807 15.2426 14.8284 15.2426H10.1715L16.9497 8.46447C17.3402 8.07394 17.3402 7.44078 16.9497 7.05025C16.5592 6.65973 15.926 6.65973 15.5355 7.05025L8.75733 13.8284V9.17157C8.75733 8.61929 8.30962 8.17157 7.75733 8.17157C7.20505 8.17157 6.75733 8.61929 6.75733 9.17157V16.2426C6.75733 16.7949 7.20505 17.2426 7.75733 17.2426H14.8284Z" fill={color}/>

    </svg>
  );
};

export default ArrowDownLeftFilled;
