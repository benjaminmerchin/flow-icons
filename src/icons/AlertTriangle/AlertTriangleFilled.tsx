import React from 'react';

interface AlertTriangleFilledProps {
  size?: number | string;
  color?: string;
}

const AlertTriangleFilled: React.FC<AlertTriangleFilledProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.80748 2.42195C10.7562 0.690202 13.2435 0.690283 14.1922 2.42195L23.161 18.7989C24.0733 20.4648 22.8679 22.4998 20.9686 22.5001H3.03111C1.13212 22.4996 -0.0732852 20.4647 0.838731 18.7989L9.80748 2.42195ZM11.9999 16.0001C11.3096 16.0002 10.7499 16.5598 10.7499 17.2501C10.7499 17.9403 11.3096 18.5 11.9999 18.5001C12.6902 18.5001 13.2498 17.9404 13.2499 17.2501C13.2499 16.5597 12.6902 16.0001 11.9999 16.0001ZM11.9999 7.25007C11.4477 7.25017 10.9999 7.69785 10.9999 8.25007V13.7501C10.9999 14.3023 11.4477 14.75 11.9999 14.7501C12.5521 14.7501 12.9998 14.3023 12.9999 13.7501V8.25007C12.9999 7.69779 12.5521 7.25007 11.9999 7.25007Z" fill={color}/>

    </svg>
  );
};

export default AlertTriangleFilled;
