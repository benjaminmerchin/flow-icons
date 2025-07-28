import React from 'react';

interface EnveloppeOutlineProps {
  size?: number | string;
  color?: string;
}

const EnveloppeOutline: React.FC<EnveloppeOutlineProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 7.5C1 5.29086 2.79086 3.5 5 3.5H19C21.2091 3.5 23 5.29086 23 7.5V16.5C23 18.7091 21.2091 20.5 19 20.5H5C2.79086 20.5 1 18.7091 1 16.5V7.5ZM3.06774 6.98196C3.02356 7.14718 3 7.32084 3 7.5V16.5C3 16.6792 3.02356 16.8528 3.06775 17.0181L8.0858 12L3.06774 6.98196ZM4.48196 5.56774L11.2929 12.3787C11.6834 12.7692 12.3166 12.7692 12.7071 12.3787L19.5181 5.56775C19.3528 5.52356 19.1792 5.5 19 5.5H5C4.82084 5.5 4.64718 5.52356 4.48196 5.56774ZM20.9323 6.98198L15.9142 12L20.9323 17.018C20.9764 16.8528 21 16.6792 21 16.5V7.5C21 7.32085 20.9764 7.1472 20.9323 6.98198ZM14.5 13.4142L14.1213 13.7929C12.9498 14.9645 11.0503 14.9645 9.87869 13.7929L9.50001 13.4142L4.48198 18.4323C4.6472 18.4764 4.82085 18.5 5 18.5H19C19.1792 18.5 19.3528 18.4764 19.518 18.4323L14.5 13.4142Z" fill={color}/>

    </svg>
  );
};

export default EnveloppeOutline;
