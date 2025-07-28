import React from 'react';
import SpeakerSlashOutline from './SpeakerSlashOutline';
import SpeakerSlashFilled from './SpeakerSlashFilled';

interface SpeakerSlashProps {
  size?: number | string;
  color?: string;
  filled?: boolean;
}

function SpeakerSlash({ 
  size = 24, 
  color = "#1A1A1A",
  filled = false 
}: SpeakerSlashProps) {
  return filled ? (
    <SpeakerSlashFilled size={size} color={color} />
  ) : (
    <SpeakerSlashOutline size={size} color={color} />
  );
}

export default SpeakerSlash;
