import React from 'react';

interface LineArrowLeftOutlineProps {
  size?: number | string;
  color?: string;
}

const LineArrowLeftOutline: React.FC<LineArrowLeftOutlineProps> = ({ 
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
      
<path d="M22.5 5C22.5 4.44772 22.0523 4 21.5 4C20.9477 4 20.5 4.44772 20.5 5V19C20.5 19.5523 20.9477 20 21.5 20C22.0523 20 22.5 19.5523 22.5 19V5Z" fill={color}/>
<path d="M9.20711 6.20711C9.59763 5.81658 9.59763 5.18342 9.20711 4.79289C8.81658 4.40237 8.18342 4.40237 7.79289 4.79289L1.29289 11.2929C0.902369 11.6834 0.902369 12.3166 1.29289 12.7071L7.79289 19.2071C8.18342 19.5976 8.81658 19.5976 9.20711 19.2071C9.59763 18.8166 9.59763 18.1834 9.20711 17.7929L4.41421 13H17.5C18.0523 13 18.5 12.5523 18.5 12C18.5 11.4477 18.0523 11 17.5 11H4.41421L9.20711 6.20711Z" fill={color}/>

    </svg>
  );
};

export default LineArrowLeftOutline;
