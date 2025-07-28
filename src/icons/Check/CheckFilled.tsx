import React from 'react';

interface CheckFilledProps {
  size?: number | string;
  color?: string;
}

function CheckFilled({ 
  size = 24, 
  color = "#1A1A1A" 
}: CheckFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM17.8455 8.03399C18.1404 7.56704 18.0009 6.94943 17.534 6.65451C17.067 6.35959 16.4494 6.49906 16.1545 6.96601L10.904 15.2793L7.78087 11.3753C7.43586 10.944 6.80657 10.8741 6.3753 11.2191C5.94404 11.5641 5.87412 12.1934 6.21913 12.6247L10.2191 17.6247C10.4211 17.8772 10.7328 18.0165 11.0557 17.9984C11.3786 17.9804 11.6728 17.8074 11.8455 17.534L17.8455 8.03399Z" fill={color}/>
    </svg>
  );
}

export default CheckFilled;
