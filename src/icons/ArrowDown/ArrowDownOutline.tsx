import React from 'react';

interface ArrowDownOutlineProps {
  size?: number | string;
  color?: string;
}

const ArrowDownOutline: React.FC<ArrowDownOutlineProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5C12.5523 2.5 13 2.94772 13 3.5L13 18.0858L17.7929 13.2929C18.1834 12.9024 18.8166 12.9024 19.2071 13.2929C19.5976 13.6834 19.5976 14.3166 19.2071 14.7071L12.7071 21.2071C12.5196 21.3946 12.2652 21.5 12 21.5C11.7348 21.5 11.4804 21.3946 11.2929 21.2071L4.79289 14.7071C4.40237 14.3166 4.40237 13.6834 4.79289 13.2929C5.18342 12.9024 5.81658 12.9024 6.20711 13.2929L11 18.0858L11 3.5C11 2.94772 11.4477 2.5 12 2.5Z" fill={color}/>

    </svg>
  );
};

export default ArrowDownOutline;
