import React from 'react';

interface MicrophoneOutlineProps {
  size?: number | string;
  color?: string;
}

const MicrophoneOutline: React.FC<MicrophoneOutlineProps> = ({ 
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
      
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C9.92893 1 8.25 2.67893 8.25 4.75V10.75C8.25 12.8211 9.92893 14.5 12 14.5C14.0711 14.5 15.75 12.8211 15.75 10.75V4.75C15.75 2.67893 14.0711 1 12 1ZM10.25 4.75C10.25 3.7835 11.0335 3 12 3C12.9665 3 13.75 3.7835 13.75 4.75V10.75C13.75 11.7165 12.9665 12.5 12 12.5C11.0335 12.5 10.25 11.7165 10.25 10.75V4.75Z" fill={color}/>
<path d="M5.5 8C6.05228 8 6.5 8.44772 6.5 9V10.5C6.5 13.5376 8.96243 16 12 16C15.0376 16 17.5 13.5376 17.5 10.5V9C17.5 8.44772 17.9477 8 18.5 8C19.0523 8 19.5 8.44772 19.5 9V10.5C19.5 14.3031 16.6694 17.445 13 17.9339V21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H7C6.44772 23 6 22.5523 6 22C6 21.4477 6.44772 21 7 21H11V17.9339C7.33064 17.445 4.5 14.3031 4.5 10.5V9C4.5 8.44772 4.94772 8 5.5 8Z" fill={color}/>

    </svg>
  );
};

export default MicrophoneOutline;
