import React from 'react';

interface XOutlineProps {
  size?: number | string;
  color?: string;
}

const XOutline: React.FC<XOutlineProps> = ({ 
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
      
<path d="M19.7782 5.636C20.1687 5.24548 20.1687 4.61231 19.7782 4.22179C19.3877 3.83126 18.7545 3.83126 18.364 4.22179L12 10.5857L5.63606 4.22179C5.24554 3.83126 4.61237 3.83126 4.22185 4.22179C3.83132 4.61231 3.83132 5.24548 4.22185 5.636L10.5858 12L4.22185 18.3639C3.83132 18.7544 3.83132 19.3876 4.22185 19.7781C4.61237 20.1687 5.24554 20.1687 5.63606 19.7781L12 13.4142L18.364 19.7781C18.7545 20.1687 19.3877 20.1687 19.7782 19.7781C20.1687 19.3876 20.1687 18.7544 19.7782 18.3639L13.4142 12L19.7782 5.636Z" fill={color}/>

    </svg>
  );
};

export default XOutline;
