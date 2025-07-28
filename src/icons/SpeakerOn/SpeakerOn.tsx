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
  color = "#1A1A1A",
  filled = false 
}: SpeakerOnProps) {
  return filled ? (
    <SpeakerOnFilled size={size} color={color} />
  ) : (
    <SpeakerOnOutline size={size} color={color} />
  );
}

export default SpeakerOn;
