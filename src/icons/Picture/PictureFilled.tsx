import React from 'react';

interface PictureFilledProps {
  size?: number | string;
  color?: string;
}

const PictureFilled: React.FC<PictureFilledProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3.5C2.34315 3.5 1 4.84315 1 6.5V17.5C1 19.1569 2.34315 20.5 4 20.5H20C21.6569 20.5 23 19.1569 23 17.5V6.5C23 4.84315 21.6569 3.5 20 3.5H4ZM21 15.7L18.2752 13.5202C17.5331 12.9264 16.4756 12.937 15.7454 13.5455L14 15L10.058 10.3413C9.24865 9.38477 7.76914 9.39952 6.97901 10.372L3 15.2692V17.5C3 18.0523 3.44772 18.5 4 18.5H20C20.5523 18.5 21 18.0523 21 17.5V15.7ZM17.5 11C18.6046 11 19.5 10.1046 19.5 9C19.5 7.89543 18.6046 7 17.5 7C16.3954 7 15.5 7.89543 15.5 9C15.5 10.1046 16.3954 11 17.5 11Z" fill={color}/>

    </svg>
  );
};

export default PictureFilled;
