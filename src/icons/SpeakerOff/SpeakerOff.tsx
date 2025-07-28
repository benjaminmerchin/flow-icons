import React from 'react';
import SpeakerOffOutline from './SpeakerOffOutline';
import SpeakerOffFilled from './SpeakerOffFilled';

interface SpeakerOffProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SpeakerOff({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: SpeakerOffProps) {
  return filled ? (
    <SpeakerOffFilled size={size} color={color} />
  ) : (
    <SpeakerOffOutline size={size} color={color} />
  );
}

export default SpeakerOff;
