import React from 'react';

interface ArrowUpLeftOutlineProps {
  size?: number | string;
  color?: string;
}

const ArrowUpLeftOutline: React.FC<ArrowUpLeftOutlineProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.182 6C16.182 5.44772 15.7343 5 15.182 5H6C5.44771 5 5 5.44772 5 6V15.182C5 15.7343 5.44771 16.182 6 16.182C6.55229 16.182 7 15.7343 7 15.182V8.41421L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L8.41421 7H15.182C15.7343 7 16.182 6.55228 16.182 6Z" fill={color}/>

    </svg>
  );
};

export default ArrowUpLeftOutline;
