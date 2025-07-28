import React from 'react';

interface CameraFilledProps {
  size?: number | string;
  color?: string;
}

const CameraFilled: React.FC<CameraFilledProps> = ({ 
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
      
<path d="M9 12.5C9 10.8431 10.3431 9.5 12 9.5C13.6569 9.5 15 10.8431 15 12.5C15 14.1569 13.6569 15.5 12 15.5C10.3431 15.5 9 14.1569 9 12.5Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5599 3.95651C8.10207 3.0529 9.07859 2.5 10.1324 2.5H13.8676C14.9214 2.5 15.8979 3.0529 16.4401 3.95651L16.7749 4.5145C16.9556 4.8157 17.2811 5 17.6324 5H20C21.6569 5 23 6.34315 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V8C1 6.34315 2.34315 5 4 5H6.36762C6.71888 5 7.04439 4.8157 7.22511 4.5145L7.5599 3.95651ZM12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5Z" fill={color}/>

    </svg>
  );
};

export default CameraFilled;
