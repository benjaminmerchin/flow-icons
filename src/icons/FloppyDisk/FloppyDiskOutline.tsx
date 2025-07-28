import React from 'react';

interface FloppyDiskOutlineProps {
  size?: number | string;
  color?: string;
}

const FloppyDiskOutline: React.FC<FloppyDiskOutlineProps> = ({ 
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
      
<path d="M7.5 7.5C7.5 6.94772 7.94772 6.5 8.5 6.5H15.5C16.0523 6.5 16.5 6.94772 16.5 7.5C16.5 8.05228 16.0523 8.5 15.5 8.5H8.5C7.94772 8.5 7.5 8.05228 7.5 7.5Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1H17.1716C17.9672 1 18.7303 1.31607 19.2929 1.87868L22.1213 4.70711C22.6839 5.26972 23 6.03278 23 6.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H5.5V14C5.5 12.8954 6.39543 12 7.5 12H16.5C17.6046 12 18.5 12.8954 18.5 14V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.56321 20.8946 6.30886 20.7071 6.12132L17.8787 3.29289C17.6911 3.10536 17.4368 3 17.1716 3H4ZM16.5 21V14H7.5V21H16.5Z" fill={color}/>

    </svg>
  );
};

export default FloppyDiskOutline;
