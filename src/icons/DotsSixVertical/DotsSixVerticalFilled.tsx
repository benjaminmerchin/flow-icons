import React from 'react';

interface DotsSixVerticalFilledProps {
  size?: number | string;
  color?: string;
}

const DotsSixVerticalFilled: React.FC<DotsSixVerticalFilledProps> = ({ 
  size = 24, 
  color = "#1A1A1A" 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
<path d="M7.25 7C8.49264 7 9.5 5.99264 9.5 4.75C9.5 3.50736 8.49264 2.5 7.25 2.5C6.00736 2.5 5 3.50736 5 4.75C5 5.99264 6.00736 7 7.25 7Z" fill={color}/>
<path d="M16.75 7C17.9926 7 19 5.99264 19 4.75C19 3.50736 17.9926 2.5 16.75 2.5C15.5074 2.5 14.5 3.50736 14.5 4.75C14.5 5.99264 15.5074 7 16.75 7Z" fill={color}/>
<path d="M9.5 12C9.5 13.2426 8.49264 14.25 7.25 14.25C6.00736 14.25 5 13.2426 5 12C5 10.7574 6.00736 9.75 7.25 9.75C8.49264 9.75 9.5 10.7574 9.5 12Z" fill={color}/>
<path d="M16.75 14.25C17.9926 14.25 19 13.2426 19 12C19 10.7574 17.9926 9.75 16.75 9.75C15.5074 9.75 14.5 10.7574 14.5 12C14.5 13.2426 15.5074 14.25 16.75 14.25Z" fill={color}/>
<path d="M9.5 19.25C9.5 20.4926 8.49264 21.5 7.25 21.5C6.00736 21.5 5 20.4926 5 19.25C5 18.0074 6.00736 17 7.25 17C8.49264 17 9.5 18.0074 9.5 19.25Z" fill={color}/>
<path d="M16.75 21.5C17.9926 21.5 19 20.4926 19 19.25C19 18.0074 17.9926 17 16.75 17C15.5074 17 14.5 18.0074 14.5 19.25C14.5 20.4926 15.5074 21.5 16.75 21.5Z" fill={color}/>

    </svg>
  );
};

export default DotsSixVerticalFilled;
