import React from 'react';
import SpeakerOnOutline from './SpeakerOnOutline';
import SpeakerOnFilled from './SpeakerOnFilled';

interface SpeakerOnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}

function SpeakerOn({ 
  size = 24,
  filled = false,
  ...props
}: SpeakerOnProps) {
  return filled ? (
    <SpeakerOnFilled size={size} {...props} />
  ) : (
    <SpeakerOnOutline size={size} {...props} />
  );
}

export default SpeakerOn;
