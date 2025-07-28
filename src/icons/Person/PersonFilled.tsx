import React from 'react';

interface PersonFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function PersonFilled({ 
  size = 24,
  ...props
}: PersonFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.00005 6C7.00005 3.23858 9.23863 1 12 1C14.7615 1 17 3.23858 17 6C17 8.76142 14.7615 11 12 11C9.23863 11 7.00005 8.76142 7.00005 6Z" fill="currentColor"/>
<path d="M1.7527 18.7834C2.59352 15.2567 5.35742 13.1145 8.51048 12.2269C8.63224 12.1926 8.76203 12.209 8.87518 12.2655C9.81579 12.7356 10.877 13 12 13C13.1231 13 14.1843 12.7356 15.1249 12.2655C15.2381 12.209 15.3679 12.1926 15.4896 12.2269C18.6427 13.1145 21.4066 15.2567 22.2474 18.7834C22.6931 20.6528 21.068 22 19.5 22H4.50005C2.93211 22 1.307 20.6528 1.7527 18.7834Z" fill="currentColor"/>
    </svg>
  );
}

export default PersonFilled;
