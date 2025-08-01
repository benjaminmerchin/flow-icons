import React from 'react';

interface EarFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function EarFilled({ 
  size = 24,
  ...props
}: EarFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 9C4.5 4.58172 8.08172 1 12.5 1C16.9183 1 20.5 4.58172 20.5 9C20.5 10.539 20.1468 11.7182 19.5785 12.6748C19.0209 13.6134 18.2884 14.2798 17.6476 14.8244C17.5598 14.8991 17.4742 14.9714 17.391 15.0417C16.2025 16.0456 15.5 16.639 15.5 18C15.5 19.5399 14.8737 20.8207 13.8334 21.7009C12.8098 22.567 11.4431 23 10 23C8.55686 23 7.19018 22.567 6.16656 21.7009C5.1263 20.8207 4.5 19.5399 4.5 18V9ZM9.75 13.5C9.75 13.9142 9.41421 14.25 9 14.25C8.58579 14.25 8.25 13.9142 8.25 13.5V9C8.25 6.65279 10.1528 4.75 12.5 4.75C14.8472 4.75 16.75 6.65279 16.75 9V9.25C16.75 9.66421 16.4142 10 16 10C15.5858 10 15.25 9.66421 15.25 9.25V9C15.25 7.48122 14.0188 6.25 12.5 6.25C10.9812 6.25 9.75 7.48122 9.75 9V13.5Z" fill="currentColor"/>
    </svg>
  );
}

export default EarFilled;
