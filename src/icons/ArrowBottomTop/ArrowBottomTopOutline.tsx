import React from 'react';

interface ArrowBottomTopOutlineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function ArrowBottomTopOutline({ 
  size = 24,
  ...props
}: ArrowBottomTopOutlineProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1.29289 15.7071C0.902369 15.3166 0.902369 14.6834 1.29289 14.2929C1.68342 13.9024 2.31658 13.9024 2.70711 14.2929L6 17.5858L6 4C6 3.44772 6.44771 3 7 3C7.55228 3 8 3.44772 8 4L8 17.5858L11.2929 14.2929C11.6834 13.9024 12.3166 13.9024 12.7071 14.2929C13.0976 14.6834 13.0976 15.3166 12.7071 15.7071L7.70711 20.7071C7.31658 21.0976 6.68342 21.0976 6.29289 20.7071L1.29289 15.7071Z" fill="currentColor"/>
<path d="M11.2929 8.29289C10.9024 8.68342 10.9024 9.31658 11.2929 9.70711C11.6834 10.0976 12.3166 10.0976 12.7071 9.70711L16 6.41421V20C16 20.5523 16.4477 21 17 21C17.5523 21 18 20.5523 18 20V6.41421L21.2929 9.70711C21.6834 10.0976 22.3166 10.0976 22.7071 9.70711C23.0976 9.31658 23.0976 8.68342 22.7071 8.29289L17.7071 3.29289C17.3166 2.90237 16.6834 2.90237 16.2929 3.29289L11.2929 8.29289Z" fill="currentColor"/>
    </svg>
  );
}

export default ArrowBottomTopOutline;
