import React from 'react';

interface CalendarOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function CalendarOutline({ 
  size = 24,
  ...props
}: CalendarOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.5 10.25C10.5 10.1119 10.6119 10 10.75 10H13.25C13.3881 10 13.5 10.1119 13.5 10.25V12.75C13.5 12.8881 13.3881 13 13.25 13H10.75C10.6119 13 10.5 12.8881 10.5 12.75V10.25Z" fill="currentColor"/>
<path d="M5.5 15.25C5.5 15.1119 5.61193 15 5.75 15H8.25C8.38807 15 8.5 15.1119 8.5 15.25V17.75C8.5 17.8881 8.38807 18 8.25 18H5.75C5.61193 18 5.5 17.8881 5.5 17.75V15.25Z" fill="currentColor"/>
<path d="M5.5 10.25C5.5 10.1119 5.61193 10 5.75 10H8.25C8.38807 10 8.5 10.1119 8.5 10.25V12.75C8.5 12.8881 8.38807 13 8.25 13H5.75C5.61193 13 5.5 12.8881 5.5 12.75V10.25Z" fill="currentColor"/>
<path d="M10.5 15.25C10.5 15.1119 10.6119 15 10.75 15H13.25C13.3881 15 13.5 15.1119 13.5 15.25V17.75C13.5 17.8881 13.3881 18 13.25 18H10.75C10.6119 18 10.5 17.8881 10.5 17.75V15.25Z" fill="currentColor"/>
<path d="M15.5 10.25C15.5 10.1119 15.6119 10 15.75 10H18.25C18.3881 10 18.5 10.1119 18.5 10.25V12.75C18.5 12.8881 18.3881 13 18.25 13H15.75C15.6119 13 15.5 12.8881 15.5 12.75V10.25Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8 0C8.55228 0 9 0.447715 9 1V2.5H15V1C15 0.447715 15.4477 0 16 0C16.5523 0 17 0.447715 17 1V2.5H20C21.6569 2.5 23 3.84315 23 5.5V19.5C23 21.1569 21.6569 22.5 20 22.5H4C2.34315 22.5 1 21.1569 1 19.5V5.5C1 3.84315 2.34315 2.5 4 2.5H7V1C7 0.447715 7.44772 0 8 0ZM20 7.5C20.5523 7.5 21 7.94772 21 8.5V19.5C21 20.0523 20.5523 20.5 20 20.5H4C3.44772 20.5 3 20.0523 3 19.5V8.5C3 7.94772 3.44772 7.5 4 7.5H20Z" fill="currentColor"/>
    </svg>
  );
}

export default CalendarOutline;
