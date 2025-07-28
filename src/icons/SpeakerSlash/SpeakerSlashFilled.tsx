import React from 'react';

interface SpeakerSlashFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function SpeakerSlashFilled({ 
  size = 24,
  ...props
}: SpeakerSlashFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L21.5303 3.53033Z" fill="currentColor"/>
<path d="M14.991 3.52037C15.7431 2.83662 16.8498 3.10313 17.2992 3.87234L5.60905 15.5625C5.53872 15.3888 5.5 15.1989 5.5 15V9C5.5 8.17158 6.17157 7.5 7 7.5H10.6134L14.991 3.52037Z" fill="currentColor"/>
<path d="M10.6134 16.5H10.3284L17.5 9.32843V19.3697C17.5 20.6719 15.9546 21.3556 14.991 20.4796L10.6134 16.5Z" fill="currentColor"/>
    </svg>
  );
}

export default SpeakerSlashFilled;
