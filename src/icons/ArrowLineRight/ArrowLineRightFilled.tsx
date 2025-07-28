import React from 'react';

interface ArrowLineRightFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ArrowLineRightFilled({ 
  size = 24,
  ...props
}: ArrowLineRightFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.79289 6.79289C9.18342 6.40237 9.81658 6.40237 10.2071 6.79289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071L10.2071 17.2071C9.81658 17.5976 9.18342 17.5976 8.79289 17.2071C8.40237 16.8166 8.40237 16.1834 8.79289 15.7929L11.5858 13H4.5C3.94772 13 3.5 12.5523 3.5 12C3.5 11.4477 3.94772 11 4.5 11H11.5858L8.79289 8.20711C8.40237 7.81658 8.40237 7.18342 8.79289 6.79289ZM18.5 16.5C18.5 17.0523 18.0523 17.5 17.5 17.5C16.9477 17.5 16.5 17.0523 16.5 16.5V7.5C16.5 6.94772 16.9477 6.5 17.5 6.5C18.0523 6.5 18.5 6.94772 18.5 7.5V16.5Z" fill="currentColor"/>
    </svg>
  );
}

export default ArrowLineRightFilled;
