import React from 'react';
import SpeakerOnOutline from './SpeakerOnOutline';
import SpeakerOnFilled from './SpeakerOnFilled';

interface SpeakerOnProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SpeakerOn({ 
  size = 24, 
  color = "currentColor",
  filled = false 
}: SpeakerOnProps) {
  return filled ? (
    <SpeakerOnFilled size={size} color={color} />
  ) : (
    <SpeakerOnOutline size={size} color={color} />
  );
}

export default SpeakerOn;
