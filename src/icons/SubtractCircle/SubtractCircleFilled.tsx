import React from 'react';

interface SubtractCircleFilledProps {
  size?: number | string;
  color?: string;
}

function SubtractCircleFilled({ 
  size = 24, 
  color = "currentColor" 
}: SubtractCircleFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_4018_61734)">
<path d="M9.5 0.5C13.2852 0.5 16.5218 2.83786 17.8516 6.14746C21.1618 7.47696 23.5 10.7144 23.5 14.5C23.5 14.5277 23.4973 14.5554 23.4971 14.583L18.4971 9.58301C18.4893 10.438 18.3622 11.2637 18.1318 12.0459L23.1318 17.0459C22.7984 18.1784 22.2492 19.2174 21.5303 20.1162L16.5303 15.1162C16.1126 15.6383 15.6383 16.1126 15.1162 16.5303L20.1162 21.5303C19.2174 22.2492 18.1784 22.7984 17.0459 23.1318L12.0459 18.1318C11.2637 18.3622 10.438 18.4893 9.58301 18.4971L14.583 23.4971C14.5554 23.4973 14.5277 23.5 14.5 23.5C10.7144 23.5 7.47696 21.1618 6.14746 17.8516C2.83786 16.5218 0.5 13.2852 0.5 9.5C0.5 4.52944 4.52944 0.5 9.5 0.5Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_4018_61734">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
}

export default SubtractCircleFilled;
