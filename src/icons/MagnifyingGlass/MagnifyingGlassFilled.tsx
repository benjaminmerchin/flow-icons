import React from 'react';

interface MagnifyingGlassFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function MagnifyingGlassFilled({ 
  size = 24,
  ...props
}: MagnifyingGlassFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C12.1569 13.5 13.5 12.1569 13.5 10.5C13.5 8.84315 12.1569 7.5 10.5 7.5Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM5.5 10.5C5.5 7.73858 7.73858 5.5 10.5 5.5C13.2614 5.5 15.5 7.73858 15.5 10.5C15.5 11.5191 15.1951 12.467 14.6716 13.2574L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L13.2574 14.6716C12.467 15.1951 11.5191 15.5 10.5 15.5C7.73858 15.5 5.5 13.2614 5.5 10.5Z" fill="currentColor"/>
    </svg>
  );
}

export default MagnifyingGlassFilled;
