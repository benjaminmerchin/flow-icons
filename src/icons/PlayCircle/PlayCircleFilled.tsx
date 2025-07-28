import React from 'react';

interface PlayCircleFilledProps {
  size?: number | string;
  color?: string;
}

function PlayCircleFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: PlayCircleFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.1132 12L10 15.1957V8.80424L15.1132 12Z" fill={color}/>
<path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.295 6.63012C9.29592 6.0057 8 6.72397 8 7.90212V16.0979C8 17.276 9.29592 17.9943 10.295 17.3699L16.8516 13.272C17.7916 12.6845 17.7916 11.3155 16.8516 10.728L10.295 6.63012Z" fill={color}/>
    </svg>
  );
}

export default PlayCircleFilled;
