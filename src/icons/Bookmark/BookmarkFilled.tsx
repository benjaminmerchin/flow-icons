import React from 'react';

interface BookmarkFilledProps {
  size?: number | string;
  color?: string;
}

function BookmarkFilled({ 
  size = 24, 
  color = "currentColor" 
}: BookmarkFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1C6.34315 1 5 2.34315 5 4V22C5 22.4045 5.24364 22.7691 5.61732 22.9239C5.99099 23.0787 6.42111 22.9931 6.70711 22.7071L12 17.4142L17.2929 22.7071C17.5789 22.9931 18.009 23.0787 18.3827 22.9239C18.7564 22.7691 19 22.4045 19 22V4C19 2.34315 17.6569 1 16 1H8Z" fill={color}/>
    </svg>
  );
}

export default BookmarkFilled;
