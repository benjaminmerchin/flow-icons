import React from 'react';

interface SpeakerOffFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

function SpeakerOffFilled({ 
  size = 24,
  ...props
}: SpeakerOffFilledProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.5 5.13027C12.5 3.82806 10.9546 3.1444 9.99099 4.02036L5.61339 8H3C2.17157 8 1.5 8.67157 1.5 9.5V14.5C1.5 15.3284 2.17157 16 3 16H5.61339L9.99099 19.9796C10.9546 20.8556 12.5 20.1719 12.5 18.8697V5.13027Z" fill="currentColor"/>
<path d="M14.4341 7.92969C14.727 7.6368 15.2019 7.6368 15.4948 7.92969L18.5 10.9349L21.5052 7.92969C21.7981 7.6368 22.273 7.6368 22.5659 7.92969C22.8588 8.22259 22.8588 8.69746 22.5659 8.99035L19.5607 11.9956L22.5659 15.0008C22.8588 15.2937 22.8588 15.7685 22.5659 16.0614C22.273 16.3543 21.7981 16.3543 21.5052 16.0614L18.5 13.0562L15.4948 16.0614C15.2019 16.3543 14.727 16.3543 14.4342 16.0614C14.1413 15.7685 14.1413 15.2937 14.4342 15.0008L17.4394 11.9956L14.4341 8.99035C14.1413 8.69746 14.1413 8.22259 14.4341 7.92969Z" fill="currentColor"/>
    </svg>
  );
}

export default SpeakerOffFilled;
