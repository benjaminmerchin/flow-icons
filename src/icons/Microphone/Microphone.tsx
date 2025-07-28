import React from 'react';
import MicrophoneOutline from './MicrophoneOutline';
import MicrophoneFilled from './MicrophoneFilled';

interface MicrophoneProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const Microphone: React.FC<MicrophoneProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <MicrophoneFilled size={size} color={color} />
  ) : (
    <MicrophoneOutline size={size} color={color} />
  );
};

export default Microphone;
