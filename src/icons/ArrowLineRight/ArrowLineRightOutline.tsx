import React from 'react';

interface ArrowLineRightOutlineProps {
  size?: number | string;
  color?: string;
}

function ArrowLineRightOutline({ 
  size = 24, 
  color = "currentColor" 
}: ArrowLineRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 5C23 4.44772 22.5523 4 22 4C21.4477 4 21 4.44772 21 5V19C21 19.5523 21.4477 20 22 20C22.5523 20 23 19.5523 23 19V5Z" fill={color}/>
<path d="M12.2071 4.79289C11.8166 4.40237 11.1834 4.40237 10.7929 4.79289C10.4024 5.18342 10.4024 5.81658 10.7929 6.20711L15.5858 11H1.5C0.947715 11 0.5 11.4477 0.5 12C0.5 12.5523 0.947715 13 1.5 13H15.5858L10.7929 17.7929C10.4024 18.1834 10.4024 18.8166 10.7929 19.2071C11.1834 19.5976 11.8166 19.5976 12.2071 19.2071L18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L12.2071 4.79289Z" fill={color}/>
    </svg>
  );
}

export default ArrowLineRightOutline;
