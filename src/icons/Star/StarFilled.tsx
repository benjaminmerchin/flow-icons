import React from 'react';

interface StarFilledProps {
  size?: number | string;
  color?: string;
}

function StarFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: StarFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.1888 2.42269C12.8146 1.27105 11.1854 1.27105 10.8112 2.42269L8.91606 8.25526H2.77083C1.55924 8.25526 1.05622 9.80622 2.03718 10.5173L7.00997 14.1221L5.11488 19.9589C4.74087 21.1108 6.05967 22.0682 7.03909 21.3558L12 17.7472L16.9609 21.3558C17.9403 22.0682 19.2591 21.1108 18.8851 19.9589L16.99 14.1221L21.9628 10.5173C22.9438 9.80622 22.4408 8.25526 21.2292 8.25526H15.0839L13.1888 2.42269Z" fill={color}/>
    </svg>
  );
}

export default StarFilled;
