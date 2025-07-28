import React from 'react';

interface LineArrowRightOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function LineArrowRightOutline({ 
  size = 24,
  ...props
}: LineArrowRightOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.5 5C3.5 4.44772 3.05228 4 2.5 4C1.94772 4 1.5 4.44772 1.5 5V19C1.5 19.5523 1.94772 20 2.5 20C3.05228 20 3.5 19.5523 3.5 19V5Z" fill="currentColor"/>
<path d="M16.2071 4.79289C15.8166 4.40237 15.1834 4.40237 14.7929 4.79289C14.4024 5.18342 14.4024 5.81658 14.7929 6.20711L19.5858 11H6.5C5.94772 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94772 13 6.5 13H19.5858L14.7929 17.7929C14.4024 18.1834 14.4024 18.8166 14.7929 19.2071C15.1834 19.5976 15.8166 19.5976 16.2071 19.2071L22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929L16.2071 4.79289Z" fill="currentColor"/>
    </svg>
  );
}

export default LineArrowRightOutline;
