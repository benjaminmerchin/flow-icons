import React from 'react';

interface SpeakerSlashOutlineProps {
  size?: number | string;
  color?: string;
}

const SpeakerSlashOutline: React.FC<SpeakerSlashOutlineProps> = ({ 
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
      
<path d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L21.5303 3.53033Z" fill={color}/>
<path d="M14.991 3.52037C15.7431 2.83662 16.8498 3.10313 17.2992 3.87234L14.5212 6.65033L11.8157 9.10991C11.5396 9.36092 11.1798 9.5 10.8067 9.5H7.5V13.6716L5.60905 15.5625C5.53872 15.3888 5.5 15.1989 5.5 15V9C5.5 8.17158 6.17157 7.5 7 7.5H10.6134L14.991 3.52037Z" fill={color}/>
<path d="M15.5 18.2395L11.8799 14.9485L10.3284 16.5H10.6134L14.991 20.4796C15.9546 21.3556 17.5 20.6719 17.5 19.3697V9.32843L15.5 11.3284V18.2395Z" fill={color}/>

    </svg>
  );
};

export default SpeakerSlashOutline;
