import React from 'react';
import MicrophoneOutline from './MicrophoneOutline';
import MicrophoneFilled from './MicrophoneFilled';

interface MicrophoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function Microphone({ 
  size = 24,
  filled = false,
  ...props
}: MicrophoneProps) {
  return filled ? (
    <MicrophoneFilled size={size} {...props} />
  ) : (
    <MicrophoneOutline size={size} {...props} />
  );
}

export default Microphone;
