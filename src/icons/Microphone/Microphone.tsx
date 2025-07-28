import React from 'react';
import MicrophoneOutline from './MicrophoneOutline';
import MicrophoneFilled from './MicrophoneFilled';

interface MicrophoneProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function Microphone({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: MicrophoneProps) {
  return filled ? (
    <MicrophoneFilled size={size} color={color} />
  ) : (
    <MicrophoneOutline size={size} color={color} />
  );
}

export default Microphone;
