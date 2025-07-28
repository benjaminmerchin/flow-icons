import React from 'react';

interface SquareArrowOutFilledProps {
  size?: number | string;
  color?: string;
}

const SquareArrowOutFilled: React.FC<SquareArrowOutFilledProps> = ({ 
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
      
<path d="M4.5 2C2.84315 2 1.5 3.34315 1.5 5V19C1.5 20.6569 2.84315 22 4.5 22H13.5C15.1569 22 16.5 20.6569 16.5 19V15H10C8.34315 15 7 13.6569 7 12C7 10.3431 8.34315 9 10 9L16.5 9V5C16.5 3.34315 15.1569 2 13.5 2H4.5Z" fill={color}/>
<path d="M20.207 7.79289C19.8165 7.40237 19.1834 7.40237 18.7928 7.79289C18.4023 8.18342 18.4023 8.81658 18.7928 9.20711L20.5858 11.0001L10 11.0001C9.44772 11.0001 9 11.4478 9 12.0001C9 12.5523 9.44772 13.0001 10 13.0001L20.5858 13.0001L18.7928 14.793C18.4023 15.1835 18.4023 15.8167 18.7928 16.2072C19.1834 16.5978 19.8165 16.5978 20.207 16.2072L23.7071 12.7072C23.8946 12.5196 24 12.2653 24 12.0001C24 11.7348 23.8946 11.4805 23.7071 11.293L20.207 7.79289Z" fill={color}/>

    </svg>
  );
};

export default SquareArrowOutFilled;
