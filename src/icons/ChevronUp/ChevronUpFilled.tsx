import React from 'react';

interface ChevronUpFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ChevronUpFilled({ 
  size = 24,
  ...props
}: ChevronUpFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM18.2071 13.2929L12.7071 7.79289C12.3166 7.40237 11.6834 7.40237 11.2929 7.79289L5.79289 13.2929C5.40237 13.6834 5.40237 14.3166 5.79289 14.7071C6.18342 15.0976 6.81658 15.0976 7.20711 14.7071L12 9.91421L16.7929 14.7071C17.1834 15.0976 17.8166 15.0976 18.2071 14.7071C18.5976 14.3166 18.5976 13.6834 18.2071 13.2929Z" fill="currentColor"/>
    </svg>
  );
}

export default ChevronUpFilled;
