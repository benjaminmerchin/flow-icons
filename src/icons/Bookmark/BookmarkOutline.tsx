import React from 'react';

interface BookmarkOutlineProps {
  size?: number | string;
  color?: string;
}

function BookmarkOutline({ 
  size = 24, 
  color = "#1A1A1A" 
}: BookmarkOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8 3C7.44772 3 7 3.44772 7 4V19.5858L11.2929 15.2929C11.6834 14.9024 12.3166 14.9024 12.7071 15.2929L17 19.5858V4C17 3.44772 16.5523 3 16 3H8ZM5 4C5 2.34315 6.34315 1 8 1H16C17.6569 1 19 2.34315 19 4V22C19 22.4045 18.7564 22.7691 18.3827 22.9239C18.009 23.0787 17.5789 22.9931 17.2929 22.7071L12 17.4142L6.70711 22.7071C6.42111 22.9931 5.99099 23.0787 5.61732 22.9239C5.24364 22.7691 5 22.4045 5 22V4Z" fill={color}/>
    </svg>
  );
}

export default BookmarkOutline;
