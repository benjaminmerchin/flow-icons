import React from 'react';

interface InformationFilledProps {
  size?: number | string;
  color?: string;
}

const InformationFilled: React.FC<InformationFilledProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 8C12.6904 8 13.25 7.44036 13.25 6.75C13.25 6.05964 12.6904 5.5 12 5.5C11.3096 5.5 10.75 6.05964 10.75 6.75C10.75 7.44036 11.3096 8 12 8ZM8.75 17C8.75 16.4477 9.19771 16 9.75 16H11.25V11.5H10C9.44771 11.5 9 11.0523 9 10.5C9 9.94772 9.44771 9.5 10 9.5H12.25C12.8023 9.5 13.25 9.94772 13.25 10.5V16H14.75C15.3023 16 15.75 16.4477 15.75 17C15.75 17.5523 15.3023 18 14.75 18H9.75C9.19771 18 8.75 17.5523 8.75 17Z" fill={color}/>

    </svg>
  );
};

export default InformationFilled;
