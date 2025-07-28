import React from 'react';

interface ChevronUpDownFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ChevronUpDownFilled({ 
  size = 24,
  ...props
}: ChevronUpDownFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM6.79289 8.79289L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L17.2071 8.79289C17.5976 9.18342 17.5976 9.81658 17.2071 10.2071C16.8166 10.5976 16.1834 10.5976 15.7929 10.2071L12 6.41421L8.20711 10.2071C7.81658 10.5976 7.18342 10.5976 6.79289 10.2071C6.40237 9.81658 6.40237 9.18342 6.79289 8.79289ZM11.2929 19.7071L6.79289 15.2071C6.40237 14.8166 6.40237 14.1834 6.79289 13.7929C7.18342 13.4024 7.81658 13.4024 8.20711 13.7929L12 17.5858L15.7929 13.7929C16.1834 13.4024 16.8166 13.4024 17.2071 13.7929C17.5976 14.1834 17.5976 14.8166 17.2071 15.2071L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071Z" fill="currentColor"/>
    </svg>
  );
}

export default ChevronUpDownFilled;
