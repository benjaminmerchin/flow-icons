import React from 'react';
import SpeakerOnOutline from './SpeakerOnOutline';
import SpeakerOnFilled from './SpeakerOnFilled';

interface SpeakerOnProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

const SpeakerOn: React.FC<SpeakerOnProps> = ({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}) => {
  return filled ? (
    <SpeakerOnFilled size={size} color={color} />
  ) : (
    <SpeakerOnOutline size={size} color={color} />
  );
};

export default SpeakerOn;
