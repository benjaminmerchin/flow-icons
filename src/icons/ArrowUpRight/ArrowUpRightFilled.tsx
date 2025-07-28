import React from 'react';

interface ArrowUpRightFilledProps {
  size?: number | string;
  color?: string;
}

const ArrowUpRightFilled: React.FC<ArrowUpRightFilledProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.1716 6.75736C8.61931 6.75736 8.1716 7.20507 8.1716 7.75736C8.1716 8.30964 8.61931 8.75736 9.1716 8.75736H13.8285L7.05028 15.5355C6.65975 15.9261 6.65975 16.5592 7.05028 16.9497C7.4408 17.3403 8.07397 17.3403 8.46449 16.9497L15.2427 10.1716V14.8284C15.2427 15.3807 15.6904 15.8284 16.2427 15.8284C16.795 15.8284 17.2427 15.3807 17.2427 14.8284V7.75736C17.2427 7.20507 16.795 6.75736 16.2427 6.75736H9.1716Z" fill={color}/>

    </svg>
  );
};

export default ArrowUpRightFilled;
